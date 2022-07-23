const initialState = [];

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
      const updatedItemsDelete = state.map((item) => {
        if (item.id !== action.id) {
          return { ...item };
        }
        return item;
      });
      return updatedItemsDelete;

    // const updatedItemsDelete = state
    //   .filter((item) => {
    //     item.id !== action.id;
    //     console.log(item);
    //   })
    //   .map((item) => {
    //     return { ...item };
    //   });
    // return updatedItemsDelete;

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
