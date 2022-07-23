const initialState = [
  {
    id: 0,
    content: "bip",
    board: "test1",
    status: "draft",
  },
  {
    id: 1,
    content: "bip2",
    board: "test1",
    status: "draft",
  },
];

/*eslint-disable */
export default (state = initialState, action = {}) => {
  /* eslint-enable */
  switch (action.type) {
    case "POSIIT_ADD":
      return [...state, { ...action.payload, id: state.length }];

    case "POSIIT_ADDCONTENT":
      const updatedItemsContent = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, content: action.payload.content };
        }
        return item;
      });
      return updatedItemsContent;

    case "POSIIT_DELETE":
      return [...state, {}];

    case "POSIIT_CHANGESTATUS":
      const updatedItems = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, status: action.payload.status };
        }
        return item;
      });
      return updatedItems;

    default:
      return state;
  }
};
