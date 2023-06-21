import {
  setFormCard,
  selectFormCard,
  setNewCardInput,
  selectNewCardText,
  setNewCardText,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";
import Textarea from "react-textarea-autosize";

const CardButton = ({ listId }) => {
  const formCard = useSelector(selectFormCard);
  const dispatch = useDispatch();
  const newCardText = useSelector(selectNewCardText);

  if (formCard[listId]) {
    return (
      <div>
        <Textarea
          className="textArea button cardButton"
          placeholder="Enter text..."
          autoFocus
          onBlur={() => {
            dispatch(setFormCard(listId));
          }}
          onInput={(e) => {
            dispatch(setNewCardInput(e.target.value));
          }}
        />
        <button
          className="button cardButton saveButton"
          onMouseDown={(e) => {
            dispatch(setNewCardText({ text: newCardText, listId: listId }));
          }}
        >
          Save Card
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        className="button cardButton"
        onClick={() => {
          dispatch(setFormCard(listId));
        }}
      >
        + Add card
      </button>
    </div>
  );
};

export default CardButton;
