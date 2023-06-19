import {
  setFormCard,
  selectFormCard,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";

const CardButton = ({ listId }) => {
  const formCard = useSelector(selectFormCard);
  const dispatch = useDispatch();

  console.log(formCard[listId]);

  if (formCard[listId]) {
    return <h4>test</h4>;
  }

  return (
    <div>
      <button
        className="button cardButton"
        onClick={() => {
          dispatch(setFormCard(listId));
        }}
      >
        + Add a new card
      </button>
    </div>
  );
};

export default CardButton;
