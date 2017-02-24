import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';


// import * as reducers from '../reducers';
// const rootReducer = combineReducers(reducers);

import todos from '../reducers/todoReducer';
import visibilityFilter from '../reducers/visibilityReducer';

const rootReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;