import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ onTodoClick, todos }) => (
  <ul>
    {todos.map((todo, i) => {
      return <Todo
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        {...todo}
      />
    })}
  </ul>
);

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
}

export default TodoList;