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
      <div className="boardTitle">
        <textarea
          className="boardTitleInput"
          autoFocus
          onInput={(e) => {
            dispatch(setBoardTitle(e.target.value));
          }}
          onBlur={() => {
            dispatch(setBoardTitleBoolean());
          }}
        >
          {boardTitle}
        </textarea>
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
      <h1 className="boardTitle">{boardTitle}</h1>
      <EditIcon
        onClick={() => {
          dispatch(setBoardTitleBoolean());
        }}
      />
    </div>
  );
};

export default BoardTitle;
