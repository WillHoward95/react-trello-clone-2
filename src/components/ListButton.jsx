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
      <div className="textAreaContainer listTextAreaContainer">
        <Textarea
          className="button textArea listTextArea"
          placeholder="Enter a title..."
          autoFocus
          onBlur={() => {
            dispatch(setFormList());
          }}
          onInput={(e) => {
            dispatch(setListTitleInput(e.target.value));
          }}
        />
        <button
          className="button listButton saveButton"
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
