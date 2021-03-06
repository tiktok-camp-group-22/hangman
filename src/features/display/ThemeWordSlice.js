const initialState = {
  theme: "",
  word: "",
};

function stateReducer (state = initialState, action) {
  switch (action.type) {
    case 'add': 
      return { ...state, theme: action.theme, word: action.word};
    default:
      return state;
  }
}

export default stateReducer;
