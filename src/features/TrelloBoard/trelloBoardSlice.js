import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../initialState";

let listId = 2;
let cardId = 100;

export const trelloBoardSlice = createSlice({
  name: "trelloBoard",
  initialState,
  reducers: {
    setFormCard: (state, action) => {
      state.openFormCard[action.payload] = !state.openFormCard[action.payload];
    },
    setFormList: (state) => {
      state.openFormList = !state.openFormList;
    },
    setNewCardText: (state, action) => {
      state.board[action.payload.listId].cards.push({
        text: action.payload.text,
        key: cardId,
        cardId: cardId,
      });
      cardId += 1;
    },
    setNewCardInput: (state, action) => {
      state.newCardText = action.payload;
    },
    setNewList: (state, action) => {
      state.board.push({
        title: action.payload,
        cards: [],
        listId: listId,
      });
      listId += 1;
    },
    setListTitleInput: (state, action) => {
      state.listTitleInput = action.payload;
    },
  },
});

export const {
  setFormCard,
  setFormList,
  setNewCardText,
  setNewCardInput,
  setNewList,
  setListTitleInput,
} = trelloBoardSlice.actions;

export const selectLists = (state) => state.trelloBoard.board;
export const selectFormCard = (state) => state.trelloBoard.openFormCard;
export const selectFormList = (state) => state.trelloBoard.openFormList;
export const selectListTitleInput = (state) => state.trelloBoard.listTitleInput;
export const selectNewCardText = (state) => state.trelloBoard.newCardText;

export default trelloBoardSlice.reducer;
