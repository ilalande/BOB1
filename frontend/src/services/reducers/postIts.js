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
      const { content } = action.payload.content;
      return [...state, { ...action.payload, content: action.payload.content }];

    case "POSIIT_DELETE":
      return [...state, {}];

    case "POSIIT_CHANGESTATUS":
      // const { updatedItem } = state
      //   .filter((item) => item.id === action.payload.id)
      //   .map((item) => {
      //     return { ...item, status: action.payload.status };
      //   });
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
