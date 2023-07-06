import React, { useState } from "react";
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
import Joyride from "react-joyride";

function App() {
  const trelloLists = useSelector(selectLists);
  const bgColor = useSelector(selectBgColor);
  const fontSize = useSelector(selectFontSize);

  //change settings
  useEffect(() => {
    document.body.style.backgroundColor = `#${bgColor}`;
  }, [bgColor]);
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  //onboarding steps
  const steps = [
    {
      target: "body",
      content: "Welcome! Please spare a minute to learn about our page",
      disableBeacon: true,
    },
    {
      target: ".listContainer",
      content: "These are your lists, they categorise your cards",
    },
    {
      target: ".card",
      content: "These are your cards, they represent each task to complete",
    },
    {
      target: ".cardButton",
      content: "You can add as many cards as you like to a list",
    },
    {
      target: ".listButton",
      content: "The same goes for lists",
    },
    {
      target: ".listContainer",
      content:
        "Both lists and cards can be moved around by dragging and dropping",
    },
    {
      target: ".boardTitleContainer",
      content:
        "This is your board title, you can edit it by clicking the pencil or clicking directly on the title itself",
    },
    {
      target: ".navbarLinks",
      content:
        "Here you can add team members to your board, login to save your progress, or alter the settings of the board.",
    },
  ];

  return (
    <>
      <Joyride
        steps={steps}
        continuous={true}
        styles={{
          options: {
            arrowColor: `#${bgColor}`,
            backgroundColor: `#${bgColor}`,
            primaryColor: "#0484ce",
            textColor: "#fff",
          },
        }}
        showProgress={true}
        showSkipButton={true}
      />
      <Interface trelloLists={trelloLists} />
    </>
  );
}

export default App;
