import TrelloList from "./TrelloList";
import ListButton from "./ListButton";
import { DragDropContext } from "react-beautiful-dnd";

const Interface = ({ trelloLists }) => {
  const onDragEnd = (result) => {
    //todo reordering logic
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
};

export default Interface;
