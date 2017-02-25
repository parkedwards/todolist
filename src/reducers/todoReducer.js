import { ADD_TODO, TOGGLE_TODO } from '../actions/ActionTypes';

// a helper function
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        id: action.id,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.index) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;  
  }
}

// the actual reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(null, action)
      ];
    case TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
}

export default todos;