import TrelloList from "./TrelloList";
import ListButton from "./ListButton";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { sort } from "../features/TrelloBoard/trelloBoardSlice";

const Interface = ({ trelloLists }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    //todo reordering logic
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort({
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId: draggableId,
      })
    );
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
