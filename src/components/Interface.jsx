import TrelloList from "./TrelloList";
import ListButton from "./ListButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { sort } from "../features/TrelloBoard/trelloBoardSlice";

const Interface = ({ trelloLists }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    //todo reordering logic
    const { destination, source, draggableId, type } = result;

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
        type: type,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => {
          return (
            <div
              className="listContainer"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {trelloLists.map((listItem, index) => {
                return (
                  <TrelloList
                    title={listItem.title}
                    listId={listItem.listId}
                    cards={listItem.cards}
                    key={listItem.listId}
                    index={index}
                  />
                );
              })}
              <ListButton />
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default Interface;
