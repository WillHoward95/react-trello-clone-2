import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import {
  selectBoardTitleBoolean,
  setBoardTitleBoolean,
  setBoardTitle,
  selectBoardTitle,
} from "../../features/TrelloBoard/trelloBoardSlice";
import { useRef, useEffect } from "react";

const BoardTitle = () => {
  const dispatch = useDispatch();
  const boardTitleBoolean = useSelector(selectBoardTitleBoolean);
  const boardTitle = useSelector(selectBoardTitle);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [boardTitleBoolean]);

  if (boardTitleBoolean) {
    return (
      <div className="boardTitleContainer">
        <p
          contentEditable="true"
          className="boardTitleInput boardTitle"
          autoFocus
          ref={inputRef}
          onInput={(e) => {
            dispatch(setBoardTitle(e.target.value));
          }}
          onBlur={() => {
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
  }

  return (
    <div className="boardTitleContainer">
      <p
        className="boardTitle"
        onClick={() => {
          dispatch(setBoardTitleBoolean());
        }}
        ref={inputRef}
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
