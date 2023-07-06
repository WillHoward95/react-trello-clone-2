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
      <button onClick={handleOpen} className="button navBarButton">
        Add Team Members
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
              <h2>Add Team Members to board:</h2>
              <select className="teamMembers">
                <option className="teamMembersOption">User1</option>
                <option className="teamMembersOption">User2</option>
                <option className="teamMembersOption">User3</option>
              </select>
            </div>
            <button
              className="button cardButton saveButton modalSaveButton"
              onClick={handleClose}
            >
              Add members
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TeamMembers;
