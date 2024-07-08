import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../context/user.context";
import "./UsersPage.css";
import UserCard from "../components/UserCard";

function UsersPage() {
  const { users, addUser } = useContext(UserContext);

  const userCards = users.map((user) => (
    <li key={user.id}>
      <UserCard user={user}></UserCard>
    </li>
  ));

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id="users-page">
        <h2>Users</h2>
        <button onClick={addUser}>Añadir Usuario</button>
        <ul className="user-list">{userCards}</ul>
      </section>
    </>
  );
}
export default UsersPage;
