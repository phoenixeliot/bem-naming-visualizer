const { createSlice } = require("@reduxjs/toolkit");

const bemPartsSlice = createSlice({
  name: "bemParts",
  initialState: {
    block: "block",
    element: "__element",
    modifier: "_modifier",
    value: "_value",
  },
  reducers: {
    setBemParts(state, action) {
      debugger;
      Object.assign(state, action.payload);
    },
  },
});

export const { setBemParts } = bemPartsSlice.actions;
export default bemPartsSlice.reducer;
