import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import {
  selectBoardTitleBoolean,
  setBoardTitleBoolean,
  setBoardTitle,
  selectBoardTitle,
} from "../../features/TrelloBoard/trelloBoardSlice";

const BoardTitle = () => {
  const dispatch = useDispatch();
  const boardTitleBoolean = useSelector(selectBoardTitleBoolean);
  const boardTitle = useSelector(selectBoardTitle);

  if (boardTitleBoolean) {
    return (
      <div className="boardTitleContainer">
        <textarea
          type="text"
          className="boardTitleInput boardTitle"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setBoardTitleBoolean());
            }
          }}
          onInput={(e) => {
            dispatch(setBoardTitle(e.target.value));
          }}
          onBlur={() => {
            dispatch(setBoardTitleBoolean());
          }}
          value={boardTitle}
        ></textarea>
        <EditIcon
          onClick={() => {
            dispatch(setBoardTitleBoolean());
          }}
        />
      </div>
    );
  }

  return (
    <div className="boardTitleContainer">
      <p
        className="boardTitle"
        onClick={() => {
          dispatch(setBoardTitleBoolean());
        }}
      >
        {boardTitle}
      </p>
      <EditIcon
        onClick={() => {
          dispatch(setBoardTitleBoolean());
        }}
      />
    </div>
  );
};

export default BoardTitle;
