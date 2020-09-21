const { createSlice } = require("@reduxjs/toolkit");

const partPrefixes = {
  block: "",
  element: "__",
  modifier: "_",
  value: "_",
};

const cleanPartValue = (partName, value) => {
  if (value == "") {
    return "";
  }
  const trimmed = value.match(/_{0,2}([a-zA-Z0-9\\-]*)/)[1];
  return partPrefixes[partName] + trimmed;
};

const rearrangeValues = (bemParts) => {
  if (bemParts["modifier"] == "") {
    bemParts["modifier"] = bemParts["value"];
    bemParts["value"] = "";
  }
};

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
      const bemParts = action.payload;
      Object.keys(bemParts).forEach((partName) => {
        state[partName] = cleanPartValue(partName, bemParts[partName]);
      });
      rearrangeValues(state);
    },
    setBemPart(state, action) {
      const { partName, value } = action.payload;
      state[partName] = cleanPartValue(partName, value);
      rearrangeValues(state);
    },
  },
});

export const { setBemPart, setBemParts } = bemPartsSlice.actions;
export default bemPartsSlice.reducer;
