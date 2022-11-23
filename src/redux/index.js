import { persistStore } from "redux-persist";

import { composeWithDevTools } from "redux-devtools-extension";

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
export const persistor = persistStore(store);
export default { store, persistor };
