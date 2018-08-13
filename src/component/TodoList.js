import React from 'react';
import TodoItem from '../component/TodoItem';
import Todos from '../mock/data';

const TodoList = ({ Todos }) => {
  const todoLists = Todos.map(todo => (
    <TodoItem
      key= { todo.id }
      content={ todo.content }
    />
  ));

  return (
    <div className="todoitems">
      <h1 className="header">Todos</h1>
      <table>
        <tbody>
          { todoLists }
        </tbody>
      </table>
      <hr />
    </div>
  )
}

export default TodoList;
