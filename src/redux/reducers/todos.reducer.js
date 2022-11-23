// import { ADD_EDUCATION, RESET_EDUCATION } from "../actions/education.action";

const initialState = {};
const update_todo = (state, mutations) => Object.assign({}, state, mutations);

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...(state = update_todo(state, {
          todo: state.todo.concat(action.payload),
          // ...(state = update_edu(state, {
          //   education: state.concat(action.payload),
        })),
      };
    case "ADD_TODO":
      return {
        ...(state = update_todo(state, {
          todo: state.todo.concat(action.payload),
          // ...(state = update_edu(state, {
          //   education: state.concat(action.payload),
        })),
      };
    case "RESET_TODO":
      return initialState;
    default:
      return state;
  }
};

export default todos;
