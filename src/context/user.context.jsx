import { createContext, useState } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
