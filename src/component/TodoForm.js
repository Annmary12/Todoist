import React from 'react';

const TodoForm = ({ onChange, onSubmit }) => (
  <div className="todo-form">
    <form onSubmit={ onSubmit }>
      <div className="circle"></div>
      <div className="input">
        <input 
          placeholder="Enter Task"
          type="text" 
          className="input" 
          name="content" 
          id="content"
          onChange={onChange}
         />
      </div>
      <div className="button">
        <input type="submit" value="ADD" />
      </div>
    </form>
  </div>
)


export default TodoForm;
