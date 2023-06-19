import {
  setFormCard,
  selectFormCard,
  setNewCardInput,
  selectNewCardText,
  setNewCardText,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";

const CardButton = ({ listId }) => {
  const formCard = useSelector(selectFormCard);
  const dispatch = useDispatch();
  const newCardText = useSelector(selectNewCardText);

  if (formCard[listId]) {
    return (
      <div className="button cardButton">
        <textarea
          placeholder="Enter a text for this card..."
          autoFocus
          onBlur={() => {
            dispatch(setFormCard(listId));
          }}
          onInput={(e) => {
            dispatch(setNewCardInput(e.target.value));
          }}
        />
        <button
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
