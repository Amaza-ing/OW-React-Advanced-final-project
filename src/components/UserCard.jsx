import "./UserCard.css";
import React, { useContext } from "react";
import { useRecoilState } from "recoil";
import { userListState } from "../atoms/UserListState";

function UserCard({ user }) {
  const [userList, setUserList] = useRecoilState(userListState);

  const deleteUser = (userId) => {
    const remainingUsers = userList.filter((user) => user.id !== userId);
    setUserList(remainingUsers);
  };

  return (
    <article className="user-card">
      <img src={user.img} alt="user photo" />
      <h2>
        {user.name} {user.lastName}
      </h2>
      <h3>{user.email}</h3>
      <button onClick={() => deleteUser(user.id)}>Eliminar</button>
    </article>
  );
}

export default React.memo(UserCard);
