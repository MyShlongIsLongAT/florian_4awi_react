import React, { Component } from "react";
import "./App.css";
import Header from "./components/header.js";
import TaskAdder from "./components/taskAdder.js";
import ToDoList from "./components/todoList.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  generateTodoId = () => {
    return this.state.todos.length;
  };

  addTask = (value) => {
    let todo = {
      id: this.generateTodoId(),
      name: value,
      done: false,
    };

    let todos = this.state.todos;
    todos.push(todo);

    this.setState({
      todos: todos,
    });
  };

  removeTask = (id) => {
    let currentTodos = this.state.todos;

    for (let i = 0; i < currentTodos.length; i++){
      if (currentTodos[i].id === id){
        delete currentTodos[i];
      }
    }
    this.setState({
      todos: currentTodos
    });   
  };

  render() {
    return (
      <div className="App">
        <Header />
        <TaskAdder onTaskAdded={this.addTask} />
        <ToDoList todos={this.state.todos} onTaskRemoved={this.removeTask} />
      </div>
    );
  }
}

export default App;
