const initialState = {
  value: "",
  status: 'idle',
};

function letterReducer (state = initialState, action) {
  switch (action.type) {
    case 'letter/newPress': 
      return {state, status: 'pressed'};
    default:
      return state;
  }
}

export const letterSlice = createSlice({
  name: 'letter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
