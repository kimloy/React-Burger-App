import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import burgerBuilderReducers from "./store/reducers/burgerBuilder";
import orderReducer from "./store/reducers/order";
import authReducer from "./store/reducers/auth";
import { watchAuth, watchBurgerBuilder } from "./store/sagas/";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducers,
  order: orderReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewareEnchancer = applyMiddleware(thunk, sagaMiddleware);
  const enhancer = [middlewareEnchancer];
  const composedEnhancers = composeWithDevTools(...enhancer);
  const store = createStore(rootReducer, composedEnhancers);

  return store;
}

const store = configureStore();
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
