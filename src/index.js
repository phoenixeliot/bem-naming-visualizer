import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import "./index.css";

import { setBemParts } from "features/bemParts/bemPartsSlice";
import { parseClass } from "./components/parseClass";

const store = configureStore({
  reducer: rootReducer,
});

function updateFromHash() {
  const initialBemParts = parseClass(window.location.hash.slice(1));
  store.dispatch(setBemParts(initialBemParts));
}

window.addEventListener("hashchange", updateFromHash, false);
updateFromHash();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
