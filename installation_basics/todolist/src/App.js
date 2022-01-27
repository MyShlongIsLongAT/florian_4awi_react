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

  getRandomCharacter = () => {
    return (Math.random() * (1000 - 1) + 1);
  };

  addTask = (value) => {
    let todo = {
      id: this.getRandomCharacter(),
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
    console.log(id)
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
