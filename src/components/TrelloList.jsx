import TrelloCard from "./TrelloCard";
import CardButton from "./CardButton";

const TrelloList = ({ title, listId, cards, openCardForm }) => {
  return (
    <div className="list">
      <h4>{title}</h4>
      {cards.map((cardItem) => {
        return (
          <TrelloCard
            cardId={cardItem.cardId}
            text={cardItem.text}
            key={cardItem.cardId}
          />
        );
      })}
      <CardButton listId={listId} />
    </div>
  );
};

export default TrelloList;
