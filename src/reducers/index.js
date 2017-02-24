// ----------------------------------------
// -------- final Refactor ----------------
// ----------------------------------------

// import { combineReducers } from 'redux';
// import * as reducers from './reducers';

// const todoApp = combineReducers(reducers);

// export default todoApp;


// ----------------------------------------
// ---- using combineReducers ------------
// ----------------------------------------

// import visibilityFilter from './visibilityReducer';
// import todos from './todoReducer';

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

// export default todoApp;


// ----------------------------------------
// ---------- MANUAL WAY ------------------
// ----------------------------------------

// -------- initialization can happen in the lower reducers -------
// ----------------- as default parameters ----------------

// import { VisibilityFilters } from '../actions';
// const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//   visibilityFilter = SHOW_ALL,
//   todos: []
// };

// const todoApp = (state = initialState, action) => {
  // switch (action.type) {
  //   case SET_VISIBILITY_FILTER:
  //     return {
  //       ...state,
  //       visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  //     };

  //   case ADD_TODO:
  //   case TOGGLE_TODO:
  //     return {
  //       ...state,
  //       todos: todos(state.todos, action)
  //     };

    // case ADD_TODO:
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       { text: action.text, completed: false }
    //     ]
    //   };
    // case TOGGLE_TODO:
    //   return {
    //     ...state, todos: state.todos.map((todo, i) => { // mapping through previous 'todos' array, changing the 'completed' boolean status
    //       if (i === action.index) {
    //         return { ...todo, completed: !todo.completed }; // toggling the 'completed' boolean back and forth
    //       } else {
    //         return todo;
    //       }
    //     })
    //   };

  //   default:
  //     return state;
  // }

//   return { 
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action),
//   }
// }