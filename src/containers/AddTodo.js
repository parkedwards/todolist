// seems like the tutorial forces the stateless functional component here
// maybe try refactoring with a class component 
// so you can use local state


import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addToDo(input.value));
        input.value = '';
      }}>
        <input ref={(node) => {
          input = node;
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;