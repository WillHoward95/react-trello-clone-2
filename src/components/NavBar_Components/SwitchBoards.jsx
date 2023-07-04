import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { setCurrentBoard } from "../../features/TrelloBoard/trelloBoardSlice";
import { useDispatch } from "react-redux";

const style = {};

const SwitchBoards = () => {
  const dispatch = useDispatch();

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
        Switch Boards
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cardModal">
          <div className="cardModalInterior">
            <div className="switchBoardContainer">
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(0));
                }}
              >
                Board 1
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(1));
                }}
              >
                Board 2
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(2));
                }}
              >
                Board 3
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(3));
                }}
              >
                Board 4
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(4));
                }}
              >
                Board 5
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SwitchBoards;
