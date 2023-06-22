import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../initialState";

let counter = 8;
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
        console.log(action.payload);
        const list = state.board.find((element) => {
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
        state.board.push({
          listTitle: action.payload,
          cards: [],
          listId: counter,
        });
        counter += 1;
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
        const list = state.board.splice(droppableIndexStart, 1);
        state.board.splice(droppableIndexEnd, 0, ...list);
      }

      // moving cards between the same list
      if (droppableIdStart === droppableIdEnd && type !== "list") {
        const list = state.board.find((element) => {
          return Number(droppableIdStart) === element.listId;
        });

        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //moving cards between different list
      if (droppableIdStart !== droppableIdEnd && type !== "list") {
        const listStart = state.board.find(
          (list) => Number(droppableIdStart) === list.listId
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.board.find(
          (list) => Number(droppableIdEnd) === list.listId
        );

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
    },
    setBoardTitleBoolean: (state) => {
      state.boardTitleBoolean = !state.boardTitleBoolean;
    },
    setBoardTitle: (state, action) => {
      state.boardTitle = action.payload;
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
} = trelloBoardSlice.actions;

export const selectLists = (state) => state.trelloBoard.board;
export const selectFormCard = (state) => state.trelloBoard.openFormCard;
export const selectFormList = (state) => state.trelloBoard.openFormList;
export const selectListTitleInput = (state) => state.trelloBoard.listTitleInput;
export const selectNewCardText = (state) => state.trelloBoard.newCardText;
export const selectBoardTitleBoolean = (state) =>
  state.trelloBoard.boardTitleBoolean;
export const selectBoardTitle = (state) => state.trelloBoard.boardTitle;

export default trelloBoardSlice.reducer;
