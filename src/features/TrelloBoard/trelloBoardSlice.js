import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../initialState";

let listId = 2;
let cardId = 6;

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
        state.board[action.payload.listId].cards.push({
          text: action.payload.text,
          key: cardId,
          cardId: cardId,
        });
        cardId += 1;
        state.openFormCard.push(false);
      }
    },
    setNewCardInput: (state, action) => {
      state.newCardText = action.payload;
    },
    setNewListText: (state, action) => {
      if (action.payload) {
        state.board.push({
          title: action.payload,
          cards: [],
          listId: listId,
        });
        listId += 1;
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
        draggableId,
        type,
      } = action.payload;

      //drag and drop lists
      if (type === "list") {
        const list = state.board.splice(droppableIndexStart, 1);
        state.board.splice(droppableIndexEnd, 0, ...list);
      }

      // moving cards between the same list
      if (droppableIdStart === droppableIdEnd) {
        const card = state.board[droppableIdStart].cards.splice(
          droppableIndexStart,
          1
        );
        state.board[droppableIdStart].cards.splice(
          droppableIndexEnd,
          0,
          ...card
        );
      }

      //moving cards between different list
      if (droppableIdStart !== droppableIdEnd) {
        const card = state.board[droppableIdStart].cards.splice(
          droppableIndexStart,
          1
        );
        state.board[droppableIdEnd].cards.splice(droppableIndexEnd, 0, ...card);
      }
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
} = trelloBoardSlice.actions;

export const selectLists = (state) => state.trelloBoard.board;
export const selectFormCard = (state) => state.trelloBoard.openFormCard;
export const selectFormList = (state) => state.trelloBoard.openFormList;
export const selectListTitleInput = (state) => state.trelloBoard.listTitleInput;
export const selectNewCardText = (state) => state.trelloBoard.newCardText;

export default trelloBoardSlice.reducer;
