import { configureStore } from "@reduxjs/toolkit";
import trelloBoardReducer from "../features/TrelloBoard/trelloBoardSlice";

export const store = configureStore({
  reducer: {
    trelloBoard: trelloBoardReducer,
  },
});
