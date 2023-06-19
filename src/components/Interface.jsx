import TrelloList from "./TrelloList";
import ListButton from "./ListButton";

const Interface = ({ trelloLists }) => {
  return (
    <div className="listContainer">
      {trelloLists.map((listItem) => {
        return (
          <TrelloList
            title={listItem.title}
            listId={listItem.listId}
            cards={listItem.cards}
            key={listItem.listId}
          />
        );
      })}
      <ListButton />
    </div>
  );
};

export default Interface;
