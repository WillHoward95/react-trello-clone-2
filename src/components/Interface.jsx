import TrelloList from "./TrelloList";
import ListButton from "./ListButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { sort } from "../features/TrelloBoard/trelloBoardSlice";
import NavBar from "./NavBar";

const Interface = ({ trelloLists }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
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
    <>
      <NavBar />
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
                      listTitle={listItem.listTitle}
                      listId={listItem.listId}
                      cards={listItem.cards}
                      key={listItem.listId}
                      index={index}
                    />
                  );
                })}
                <ListButton className="addList" />
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Interface;
