import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../initialState";

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
  },
});

export const { setFormCard, setFormList } = trelloBoardSlice.actions;

export const selectLists = (state) => state.trelloBoard.board;
export const selectFormCard = (state) => state.trelloBoard.openFormCard;
export const selectFormList = (state) => state.trelloBoard.openFormList;

export default trelloBoardSlice.reducer;
