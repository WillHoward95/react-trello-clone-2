import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {};

const TeamMembers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className="button teamMembersButton">
        Login
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cardModal">
          <div className="cardModalInterior">
            <div className="editTeamMembers">
              <h2>Login:</h2>
              <form>
                <input type="email" />
                <input type="password" />
              </form>
            </div>
            <button
              className="button cardButton saveButton modalSaveButton"
              onClick={handleClose}
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TeamMembers;
