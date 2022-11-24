import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todos from "./todos.reducer";

const State = {
  isTask: false,
  isMyTask: false,
  isChat: false,
  isTodo: false,
  isChatPerson: false,
  taskList:{},
  chatsUser: {},
  todoLists: {},
};
export const init = (state = { ...State }, action) => {
  switch (action.type) {
    case "OPEN_TASK":
      return {
        isTask: !state.isTask,
        isChat: false,
        isTodo: false,
        isChatPerson: false,
      };
    case "OPEN_TODO":
      return {
        isTodo: !state.isTodo,
        isChat: false,
        isTask: false,
        isChatPerson: false,
      };
    case "OPEN_CHAT":
      return {
        isChat: !state.isChat,
        isTask: false,
        isTodo: false,
        isChatPerson: false,
      };
    case "OPEN_CHAT_PERSON":
      return {
        isChatPerson: !state.isChatPerson,
        isTask: false,
        isTodo: false,
        chatsUser: action.payload,
      };
    case "OPEN_MY_TASK":
      return {
        isMyTask: !state.isMyTask,
        isChatPerson: false,
        isTask: false,
        isTodo: false,
        taskList: action.payload,
      };
    default:
      return state;
  }
};
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todoList"],
};

const rootReducer = combineReducers({
  State: init,
  todoList: todos,
});

export default persistReducer(persistConfig, rootReducer);
