import {
  setFormList,
  selectFormList,
  setNewListText,
  setListTitleInput,
  selectListTitleInput,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";
import Textarea from "react-textarea-autosize";

const ListButton = () => {
  const formCard = useSelector(selectFormList);
  const listTitleInput = useSelector(selectListTitleInput);
  const dispatch = useDispatch();

  if (formCard) {
    return (
      <div className="button listButton">
        <Textarea
          className="textArea"
          placeholder="Enter a title for this card..."
          autoFocus
          onBlur={() => {
            dispatch(setFormList());
          }}
          onInput={(e) => {
            dispatch(setListTitleInput(e.target.value));
          }}
        />
        <button
          onMouseDown={() => {
            dispatch(setNewListText(listTitleInput));
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
        className="button listButton"
        onClick={() => {
          dispatch(setFormList());
        }}
      >
        + Add list
      </button>
    </div>
  );
};

export default ListButton;
