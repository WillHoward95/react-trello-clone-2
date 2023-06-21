import TeamMembers from "./NavBar_Components/TeamMembers";
import LoginSettings from "./NavBar_Components/LoginSettings";
import BoardTitle from "./NavBar_Components/BoardTitle";

const NavBar = () => {
  return (
    <>
      <BoardTitle />
      <TeamMembers />
      <LoginSettings />
    </>
  );
};

export default NavBar;
