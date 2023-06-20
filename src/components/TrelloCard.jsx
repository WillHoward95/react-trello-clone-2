import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ text, cardId, index }) => {
  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {(provided) => {
        return (
          <div
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
  );
};

export default TrelloCard;
