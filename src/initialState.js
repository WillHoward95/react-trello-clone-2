export const initialState = {
  openFormList: false,
  openFormCard: [false, false],
  board: [
    {
      title: "To Do",
      listId: 0,
      cards: [
        {
          cardId: 0,
          text: "Shopping",
        },
        {
          cardId: 1,
          text: "Laundry",
        },
      ],
    },
    {
      title: "To Do",
      listId: 1,
      cards: [
        {
          cardId: 0,
          text: "Shopping",
        },
        {
          cardId: 1,
          text: "Laundry",
        },
        {
          cardId: 3,
          text: "Laundry",
        },
        {
          cardId: 4,
          text: "Laundry",
        },
      ],
    },
  ],
};
