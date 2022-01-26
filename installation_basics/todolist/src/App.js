import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import TaskAdder from './components/taskAdder.js';
import ToDoList from './components/todoList.js';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
      {
        "id":1,
        "name":"einkaufen",
        "done":false
      },
      {
        "id":2,
        "name":"putzen",
        "done":false
      },
      {
        "id":3,
        "name":"marlo nerven",
        "done":false
      },
      ]
    };
  }
   
  render() { 
    return (
      <div className="App">
          <Header/>
          <TaskAdder></TaskAdder>
          <ToDoList todos={this.state.todos}/>
      </div>
    );
  }
}
 
export default App;
