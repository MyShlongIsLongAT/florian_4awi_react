import React, { Component } from "react";
import "./App.css";
import "./components/cssreset.css";
import Header from "./components/header.js";
import TaskAdder from "./components/taskAdder.js";
import ToDoList from "./components/todoList.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      existingIDs: [],
    };
  }

  getId = () => {
    let existingIdsCopy = [...this.state.existingIDs];
    let maxTodos = 10;
    let generatedId;

    if (isNaN(this.state.existingIDs.length)) {
      generatedId = 1;
    } else {
      generatedId = this.state.existingIDs.length + 1;
    }

    console.log(existingIdsCopy);

    if (generatedId > maxTodos) {
      for (let i = 0; i < this.state.existingIDs.length; i++) {
        if (isNaN(this.state.existingIDs[i].id)) {
          generatedId = this.state.existingIDs[i].latestId;
          existingIdsCopy.splice(i, 1);
          break;
        }
      }
      if (generatedId > maxTodos) {
        alert(
          "You have reached the maximum of ToDos \n Please delete some of your tasks if you want to continue!"
        );
        return;
      }
    }
    let newId = {
      id: generatedId,
      latestId: 0,
    };
    existingIdsCopy.push(newId);
    this.setState({
      existingIDs: existingIdsCopy,
    });
    return generatedId;
  };

  addTask = (value) => {
    let todo = {
      id: this.getId(),
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
    let currentTodos = [...this.state.todos];
    let existingIdsCopy = [...this.state.existingIDs];

    for (let i = 0; i < currentTodos.length; i++) {
      if (currentTodos[i].id === id) {
        currentTodos.splice(i, 1);
      }
    }

    for (let i = 0; i < existingIdsCopy.length; i++) {
      if (existingIdsCopy[i].id === id) {
        existingIdsCopy[i].id = "done";
        existingIdsCopy[i].latestId = id;
      }
    }

    this.setState({
      todos: currentTodos,
      existingIDs: existingIdsCopy,
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
