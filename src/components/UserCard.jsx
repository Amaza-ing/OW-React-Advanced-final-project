import { useContext } from "react";
import { UserContext } from "../context/user.context";

function UserCard({ user }) {
  const { deleteUser } = useContext(UserContext);

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

export default UserCard;
