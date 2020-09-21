import { combineReducers } from "redux";
import bemPartsReducer from "./features/bemParts/bemPartsSlice";

const rootReducer = combineReducers({
  bemParts: bemPartsReducer,
});

export default rootReducer;
