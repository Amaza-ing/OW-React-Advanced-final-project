import HeaderComponent from "../components/HeaderComponent";
import "./UsersPage.css";
import UserCard from "../components/UserCard";
import { useRecoilState } from "recoil";
import { userListState } from "../atoms/UserListState";

function UsersPage() {
  const [userList, setUserList] = useRecoilState(userListState);

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

    setUserList((prev) => [...prev, newUser]);
  };

  const userCards = userList.map((user) => (
    <li key={user.id}>
      <UserCard user={user}></UserCard>
    </li>
  ));

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id="users-page">
        <h2 data-testid="users-title">Users</h2>
        <button onClick={addUser}>Añadir Usuario</button>
        <ul className="user-list">{userCards}</ul>
      </section>
    </>
  );
}
export default UsersPage;
