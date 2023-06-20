import TrelloCard from "./TrelloCard";
import CardButton from "./CardButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ title, listId, cards, openCardForm }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {(provided) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="list"
          >
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
  );
};

export default TrelloList;
