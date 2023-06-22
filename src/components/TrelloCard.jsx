import { Draggable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Textarea from "react-textarea-autosize";
import {
  selectNewCardText,
  setNewCardInput,
  editCardText,
  selectCommentText,
  setCommentText,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TrelloCard = ({ text, cardId, index, listId, comment }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
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
          <Box sx={style}>
            <h2>Enter text:</h2>
            <Textarea
              id="modal-modal-title"
              variant="h6"
              component="h2"
              autoFocus
              defaultValue={text}
              onInput={(e) => {
                dispatch(setNewCardInput(e.target.value));
              }}
            >
              {/* {text} */}
            </Textarea>
            <h2>Add Comments:</h2>
            <Textarea
              id="modal-modal-description"
              sx={{ mt: 2 }}
              onInput={(e) => {
                dispatch(setCommentText(e.target.value));
              }}
              defaultValue={comment}
            ></Textarea>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default TrelloCard;
