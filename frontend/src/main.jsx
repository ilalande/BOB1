import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "@services/reducers";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Reset />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
