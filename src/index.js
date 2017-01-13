import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";

import PersonEditor from "./editors/PersonEditor";

let store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <PersonEditor />
  </Provider>,
  document.getElementById("root"))
