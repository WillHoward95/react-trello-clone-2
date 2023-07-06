import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../initialState";

let counter = 10;
// let cardIdCounter = 100;

export const trelloBoardSlice = createSlice({
  name: "trelloBoard",
  initialState,
  reducers: {
    setFormCard: (state, action) => {
      state.openFormCard[action.payload] = !state.openFormCard[action.payload];
      state.newCardText = "";
    },
    setFormList: (state) => {
      state.openFormList = !state.openFormList;
    },
    setNewCardText: (state, action) => {
      if (action.payload.text) {
        const list = state.boardArray[state.currentBoard].find((element) => {
          return Number(action.payload.listId) === element.listId;
        });

        list.cards.push({
          text: action.payload.text,
          key: counter,
          cardId: counter,
        });

        counter += 1;
        state.openFormCard.push(false);
      }
    },
    setNewCardInput: (state, action) => {
      state.newCardText = action.payload;
    },
    setNewListText: (state, action) => {
      if (action.payload) {
        state.boardArray[state.currentBoard].push({
          listTitle: action.payload,
          cards: [],
          listId: counter,
        });
        counter += 1;
      }
    },
    editListTitle: (state, action) => {
      const { listId, text } = action.payload;

      const list = state.boardArray[state.currentBoard].find((element) => {
        return Number(action.payload.listId) === element.listId;
      });

      if (text) {
        list.listTitle = text;
      }
    },
    setListTitleInput: (state, action) => {
      state.listTitleInput = action.payload;
    },
    sort: (state, action) => {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type,
      } = action.payload;

      //drag and drop lists
      if (type === "list") {
        const list = state.boardArray[state.currentBoard].splice(
          droppableIndexStart,
          1
        );
        state.boardArray[state.currentBoard].splice(
          droppableIndexEnd,
          0,
          ...list
        );
      }

      // moving cards between the same list
      if (droppableIdStart === droppableIdEnd && type !== "list") {
        const list = state.boardArray[state.currentBoard].find((element) => {
          return Number(droppableIdStart) === element.listId;
        });

        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //moving cards between different list
      if (droppableIdStart !== droppableIdEnd && type !== "list") {
        const listStart = state.boardArray[state.currentBoard].find(
          (list) => Number(droppableIdStart) === list.listId
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.boardArray[state.currentBoard].find(
          (list) => Number(droppableIdEnd) === list.listId
        );

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
    },
    setBoardTitleBoolean: (state) => {
      state.boardTitleBoolean = !state.boardTitleBoolean;
    },
    setBoardTitle: (state, action) => {
      state.boardTitle[state.currentBoard] = action.payload;
    },
    editCardText: (state, action) => {
      const list = state.boardArray[state.currentBoard].find((element) => {
        return Number(action.payload.listId) === element.listId;
      });

      const indexOf = list.cards.findIndex((item) => {
        return item.cardId === action.payload.cardId;
      });

      if (action.payload.text) {
        list.cards[indexOf].text = action.payload.text;
      }

      if (action.payload.comment) {
        list.cards[indexOf].comment = action.payload.comment;
      }
    },
    setCommentText: (state, action) => {
      state.comment = action.payload;
    },
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setCurrentBoard: (state, action) => {
      state.currentBoard = action.payload;
    },
  },
});

export const {
  setFormCard,
  setFormList,
  setNewCardText,
  setNewCardInput,
  setNewListText,
  setListTitleInput,
  sort,
  setBoardTitleBoolean,
  setBoardTitle,
  editCardText,
  setCommentText,
  setBgColor,
  setFontSize,
  setCurrentBoard,
  editListTitle,
} = trelloBoardSlice.actions;

export const selectLists = (state) =>
  state.trelloBoard.boardArray[state.trelloBoard.currentBoard];
export const selectFormCard = (state) => state.trelloBoard.openFormCard;
export const selectFormList = (state) => state.trelloBoard.openFormList;
export const selectListTitleInput = (state) => state.trelloBoard.listTitleInput;
export const selectNewCardText = (state) => state.trelloBoard.newCardText;
export const selectBoardTitleBoolean = (state) =>
  state.trelloBoard.boardTitleBoolean;
export const selectBoardTitle = (state) =>
  state.trelloBoard.boardTitle[state.trelloBoard.currentBoard];
export const selectBoardTitleArray = (state) => state.trelloBoard.boardTitle;
export const selectCommentText = (state) => state.trelloBoard.comment;
export const selectBgColor = (state) => state.trelloBoard.bgColor;
export const selectFontSize = (state) => state.trelloBoard.fontSize;

export default trelloBoardSlice.reducer;
