// import TeamMembers from "./NavBar_Components/TeamMembers";
// import Login from "./NavBar_Components/Login";
import BoardTitle from "./NavBar_Components/BoardTitle";
import Settings from "./NavBar_Components/Settings";
import SwitchBoards from "./NavBar_Components/SwitchBoards";
import Dropdown from "./NavBar_Components/Dropdown";
// import MenuIcon from "./menu-icon.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <BoardTitle />
      <div className="navbarLinks">
        <SwitchBoards />
        {/* <TeamMembers />
        <Login /> */}
        <Settings />
        <Dropdown />
      </div>
    </div>
  );
};

export default NavBar;
