import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  setCurrentBoard,
  selectBoardTitleArray,
} from "../../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";

const style = {};

const SwitchBoards = () => {
  const dispatch = useDispatch();
  const boardTitleArray = useSelector(selectBoardTitleArray);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className="button navBarDropdownButton">
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
                  handleClose();
                }}
              >
                {boardTitleArray[0]}
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(1));
                  handleClose();
                }}
              >
                {boardTitleArray[1]}
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(2));
                  handleClose();
                }}
              >
                {boardTitleArray[2]}
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(3));
                  handleClose();
                }}
              >
                {boardTitleArray[3]}
              </button>
              <button
                className="switchBoardButton"
                onClick={() => {
                  dispatch(setCurrentBoard(4));
                  handleClose();
                }}
              >
                {boardTitleArray[4]}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SwitchBoards;
