import { ADD_TODO, TOGGLE_TODO } from '../actions/ActionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id, completed: false }];
    case TOGGLE_TODO:
      return state.map((todo, i) => {
        if (i === action.index) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

export default todos;