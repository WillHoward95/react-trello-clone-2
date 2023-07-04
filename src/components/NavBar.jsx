import TeamMembers from "./NavBar_Components/TeamMembers";
import Login from "./NavBar_Components/Login";
import BoardTitle from "./NavBar_Components/BoardTitle";
import Settings from "./NavBar_Components/Settings";
import SwitchBoards from "./NavBar_Components/SwitchBoards";

const NavBar = () => {
  return (
    <div className="navbar">
      <BoardTitle />
      <div className="navbarLinks">
        <SwitchBoards />
        <TeamMembers />
        <Login />
        <Settings />
      </div>
    </div>
  );
};

export default NavBar;
