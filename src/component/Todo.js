import React, { Component } from 'react';
import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';
import Todos from '../mock/data';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      content: '',
      Todos
    }
  }

  // it sets the value on any change
  onChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value, id: Todos.length + 1 })
  }
  // submits the task
  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.content){
      console.log('@inside inside submit function', this.state);
      Todos.push(this.state);
      this.setState({id: '', content: '', Todos});
      document.getElementById('content').value = '';
    }
  }

  render() {
    console.log('@state', this.state.Todos);
    return (
      <React.Fragment>
        <div className="item">
          <div className="items">
            <TodoForm 
              onChange = { this.onChange }
              onSubmit = { this.onSubmit }
            />
          </div>
          <div className="itemlist">
            <TodoList 
              Todos = { this.state.Todos } 
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Todo;
