const initialState = [
  {
    id: "0",
    content: "bip",
    board: "test1",
  },
  {
    id: "2",
    content: "bip2",
    board: "test1",
  },
];

/*eslint-disable */
export default (state = initialState, action) => {
  /* eslint-enable */
  switch (action.type) {
    case "POSIIT_DELETE":
      return initialState;

    case "POSIIT_ADD":
      const newPostIt = {
        id: Math.random(), // to begin... after succeeding in puting something like postIts.lenght+1
        content: action.postIt.content,
        board: action.postIt.board,
      };
      return { ...state, postIt: state.postIts.concat(newPostIt) };

    default:
      return state;
  }
};
