const initialState = {
  id: null,
  content: null,
  board: null,
};
/*eslint-disable */
export default (state = initialState, action) => {
  /* eslint-enable */
  switch (action.type) {
    case "POSIIT_DELETE":
      return initialState;

    case "POSIIT_WRITE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
