export const initialState = {
  boardTitle: "React Trello Clone",
  boardTitleBoolean: false,
  openFormList: false,
  openFormCard: [false, false],
  board: [
    {
      listTitle: "To Do",
      listId: 0,
      cards: [
        {
          cardId: 2,
          text: "Shopping",
        },
        {
          cardId: 3,
          text: "Laundry",
        },
      ],
    },
    {
      listTitle: "To Do",
      listId: 1,
      cards: [
        {
          cardId: 4,
          text: "Shopping",
        },
        {
          cardId: 5,
          text: "Laundry",
        },
        {
          cardId: 6,
          text: "Laundry",
        },
        {
          cardId: 7,
          text: "Laundry",
        },
      ],
    },
  ],
};
