import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import insuranceReducer from "./insurance/reducer";

const rootReducer = combineReducers({
  insurance: insuranceReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

export type RootState = ReturnType<typeof rootReducer>;
