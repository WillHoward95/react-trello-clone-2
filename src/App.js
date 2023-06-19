import React from "react";
import Interface from "./components/Interface";
import "./App.css";
import { useSelector } from "react-redux";
import { selectLists } from "./features/TrelloBoard/trelloBoardSlice";
import "./App.css";

function App() {
  const trelloLists = useSelector(selectLists);

  return <Interface trelloLists={trelloLists} />;
}

export default App;
