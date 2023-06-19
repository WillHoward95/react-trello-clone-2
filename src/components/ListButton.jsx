import {
  setFormList,
  selectFormList,
} from "../features/TrelloBoard/trelloBoardSlice";
import { useDispatch, useSelector } from "react-redux";

const ListButton = () => {
  const formCard = useSelector(selectFormList);
  const dispatch = useDispatch();

  if (formCard) {
    return <h4>test</h4>;
  }

  return (
    <div>
      <button
        className="button listButton"
        onClick={() => {
          dispatch(setFormList());
        }}
      >
        + Add a new list
      </button>
    </div>
  );
};

export default ListButton;
