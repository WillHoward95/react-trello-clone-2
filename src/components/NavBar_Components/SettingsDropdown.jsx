import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  setBgColor,
  setFontSize,
} from "../../features/TrelloBoard/trelloBoardSlice";
import { useDispatch } from "react-redux";

const style = {};

const TeamMembers = () => {
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
      <button onClick={handleOpen} className="navBarDropdownButton">
        Settings
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cardModal">
          <div className="cardModalInterior">
            <p>Select background colour:</p>
            <div className="colorPickerContainer">
              <div
                className="bgColor bgColor1"
                onClick={() => {
                  dispatch(setBgColor("005585"));
                }}
              ></div>
              <div
                className="bgColor bgColor2"
                onClick={() => {
                  dispatch(setBgColor("d29034"));
                }}
              ></div>
              <div
                className="bgColor bgColor3"
                onClick={() => {
                  dispatch(setBgColor("519839"));
                }}
              ></div>
              <div
                className="bgColor bgColor4"
                onClick={() => {
                  dispatch(setBgColor("b04632"));
                }}
              ></div>
              <div
                className="bgColor bgColor5"
                onClick={() => {
                  dispatch(setBgColor("89609e"));
                }}
              ></div>
              <div
                className="bgColor bgColor6"
                onClick={() => {
                  dispatch(setBgColor("cd5a91"));
                }}
              ></div>
              <div
                className="bgColor bgColor7"
                onClick={() => {
                  dispatch(setBgColor("4bbf6b"));
                }}
              ></div>
              <div
                className="bgColor bgColor8"
                onClick={() => {
                  dispatch(setBgColor("00aecc"));
                }}
              ></div>
              <div
                className="bgColor bgColor9"
                onClick={() => {
                  dispatch(setBgColor("838c91"));
                }}
              ></div>
            </div>
            <div className="fontContainer">
              <p>Select font size:</p>
              <div className="fontButtonContainer">
                <button
                  className="button fontButton"
                  onClick={() => {
                    dispatch(setFontSize(10));
                  }}
                >
                  Small
                </button>
                <button
                  className="button fontButton"
                  onClick={() => {
                    dispatch(setFontSize(14));
                  }}
                >
                  Medium
                </button>
                <button
                  className="button fontButton"
                  onClick={() => {
                    dispatch(setFontSize(20));
                  }}
                >
                  Large
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TeamMembers;
