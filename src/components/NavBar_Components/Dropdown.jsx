import SettingsDropdown from "./SettingsDropdown";
import SwitchBoardsDropdown from "./SwitchBoardsDropdown";
import { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <>
        <div
          className="menuIcon"
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
        >
          <div className="menuIconBar"></div>
          <div className="menuIconBar"></div>
          <div className="menuIconBar"></div>
        </div>
        <div className="dropdownMenu">
          <SwitchBoardsDropdown />
          <SettingsDropdown />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="menuIcon"
        onClick={() => {
          if (open) {
            setOpen(false);
          } else {
            setOpen(true);
          }
        }}
      >
        <div className="menuIconBar"></div>
        <div className="menuIconBar"></div>
        <div className="menuIconBar"></div>
      </div>
    </>
  );
};

export default Dropdown;
