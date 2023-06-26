export const initialState = {
  boardTitle: "React Trello Clone",
  boardTitleBoolean: false,
  openFormList: false,
  openFormCard: [false, false],
  bgColor: "005585",
  fontSize: 14,
  board: [
    {
      listTitle: "To Do",
      listId: 0,
      cards: [
        {
          cardId: 3,
          text: "Shopping",
        },
        {
          cardId: 4,
          text: "Laundry",
        },
      ],
    },
    {
      listTitle: "In Progress",
      listId: 1,
      cards: [
        {
          cardId: 5,
          text: "Shopping",
        },
        {
          cardId: 6,
          text: "Wash kit",
        },
        {
          cardId: 7,
          text: "Find present for father's day",
        },
      ],
    },
    {
      listTitle: "Completed",
      listId: 2,
      cards: [
        {
          cardId: 8,
          text: "Cook lunch",
        },
        {
          cardId: 9,
          text: "Prep dinners for the week",
        },
      ],
    },
  ],
};
