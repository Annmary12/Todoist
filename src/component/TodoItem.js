import React from 'react';

const TodoItem = ({ id, content }) => (
  <tr key={id}>
    <td><hr className="list" /></td>
    <td>{content}</td>
  </tr>
);
  

export default TodoItem;
