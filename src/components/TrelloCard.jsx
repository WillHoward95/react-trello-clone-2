import { Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  selectNewCardText,
  setNewCardInput,
  editCardText,
  selectCommentText,
  setCommentText,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";

const TrelloCard = ({ text, cardId, index, listId, comment }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    dispatch(setCommentText(""));
    dispatch(setNewCardInput(""));
    setOpen(true);
  };
  const newText = useSelector(selectNewCardText);
  const commentText = useSelector(selectCommentText);
  const handleClose = () => {
    setOpen(false);
    dispatch(
      editCardText({
        text: newText,
        listId: listId,
        cardId: cardId,
        comment: commentText,
      })
    );
  };

  return (
    <>
      <Draggable draggableId={String(cardId)} index={index}>
        {(provided) => {
          return (
            <div
              onClick={handleOpen}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="card">
                <p>{text}</p>
              </div>
            </div>
          );
        }}
      </Draggable>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="cardModal">
            <div className="cardModalInterior">
              <div className="editCardText">
                <h2>Enter text:</h2>
                <textarea
                  className="modalTextArea"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  autoFocus
                  defaultValue={text}
                  onInput={(e) => {
                    dispatch(setNewCardInput(e.target.value));
                  }}
                ></textarea>
              </div>
              <div className="editCardComment">
                <h2>Add Comments:</h2>
                <textarea
                  className="modalTextArea"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  onInput={(e) => {
                    dispatch(setCommentText(e.target.value));
                  }}
                  defaultValue={comment}
                ></textarea>
              </div>
              {/* <div className="editTeamMembers">
                <h2>Assign Team Members:</h2>
                <select className="teamMembers">
                  <option className="teamMembersOption">User1</option>
                  <option className="teamMembersOption">User2</option>
                  <option className="teamMembersOption">User3</option>
                </select>
              </div> */}
              <button
                className="button cardButton saveButton modalSaveButton"
                onClick={handleClose}
              >
                Save Card
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default TrelloCard;
