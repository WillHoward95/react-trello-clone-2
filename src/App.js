import React from "react";
import Interface from "./components/Interface";
import "./App.css";
import { useSelector } from "react-redux";
import {
  selectLists,
  selectBgColor,
  selectFontSize,
} from "./features/TrelloBoard/trelloBoardSlice";
import "./App.css";
import { useEffect } from "react";

function App() {
  const trelloLists = useSelector(selectLists);
  const bgColor = useSelector(selectBgColor);
  const fontSize = useSelector(selectFontSize);

  useEffect(() => {
    document.body.style.backgroundColor = `#${bgColor}`;
  }, [bgColor]);
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  console.log(document.body.style.fontSize);

  return <Interface trelloLists={trelloLists} />;
}

export default App;
