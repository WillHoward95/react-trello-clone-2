import TrelloCard from "./TrelloCard";
import CardButton from "./CardButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TrelloList = ({ title, listId, cards, openCardForm, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="list"
            {...provided.dragHandleProps}
          >
            <Droppable droppableId={String(listId)}>
              {(provided) => {
                return (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h4>{title}</h4>
                    {cards.map((cardItem, index) => {
                      return (
                        <TrelloCard
                          cardId={cardItem.cardId}
                          text={cardItem.text}
                          key={cardItem.cardId}
                          index={index}
                        />
                      );
                    })}
                    <CardButton listId={listId} openCardForm={openCardForm} />
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
