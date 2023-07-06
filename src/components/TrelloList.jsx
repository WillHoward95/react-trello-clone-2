import TrelloCard from "./TrelloCard";
import CardButton from "./CardButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  setListTitleInput,
  selectListTitleInput,
  editListTitle,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";

const TrelloList = ({ listTitle, listId, cards, openCardForm, index }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    dispatch(setListTitleInput(""));
    setOpen(true);
  };

  const newText = useSelector(selectListTitleInput);

  const handleClose = () => {
    setOpen(false);
    dispatch(
      editListTitle({
        text: newText,
        listId: listId,
      })
    );

    console.log(newText);
  };

  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <Droppable droppableId={String(listId)}>
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="list"
                  >
                    <h4 className="listTitle" onClick={handleOpen}>
                      {listTitle}
                    </h4>
                    {cards.map((cardItem, index) => {
                      return (
                        <TrelloCard
                          cardId={cardItem.cardId}
                          text={cardItem.text}
                          key={cardItem.cardId}
                          index={index}
                          listId={listId}
                          comment={cardItem.comment}
                        />
                      );
                    })}
                    <CardButton listId={listId} openCardForm={openCardForm} />
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className="cardModal">
                        <div className="cardModalInterior">
                          <div className="editCardText">
                            <h2>Edit list title:</h2>
                            <textarea
                              className="modalTextArea"
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                              autoFocus
                              defaultValue={listTitle}
                              onInput={(e) => {
                                dispatch(setListTitleInput(e.target.value));
                              }}
                            ></textarea>
                          </div>
                          <button
                            className="button cardButton saveButton modalSaveButton"
                            onClick={handleClose}
                          >
                            Save List Title
                          </button>
                        </div>
                      </Box>
                    </Modal>
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};

export default TrelloList;
