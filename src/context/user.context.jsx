import { createContext, useState } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const userData = data.results[0];

    const newUser = {
      id: userData.login.uuid,
      name: userData.name.first,
      lastName: userData.name.last,
      email: userData.email,
      img: userData.picture.large,
    };

    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    const remainingUsers = users.filter((user) => user.id !== userId);
    setUsers(remainingUsers);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
