import React, { Component } from "react";
import "./App.css";
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

    if (isNaN(this.state.existingIDs.length)){
      generatedId = 1;
    } 
    else {
      generatedId = this.state.existingIDs.length + 1;
    }

    if (generatedId > maxTodos) {
      this.state.existingIDs.forEach(element => {
        console.log(element);
        //if (isNaN(element)){
          //generatedId = element
        //}
      });
      alert(
        "You have reached the maximum of ToDos \n Please delete some of your tasks if you want to continue!"
      );
      return;
    } else {
      existingIdsCopy.push(generatedId);
      this.setState({
        existingIDs: existingIdsCopy,
      });
      return generatedId;
    }
  };

  addTask = (value) => {
    let todo = {
      id: this.getId(),
      name: value,
      done: false,
    };

    console.log(todo.id);
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos: todos,
    });
  };

  removeTask = (id) => {
    let currentTodos = [...this.state.todos];
    for (let i = 0; i < currentTodos.length; i++) {
      if (currentTodos[i].id === id) {
        currentTodos.splice(i, 1);
      }
    }
    this.setState({
      todos: currentTodos,
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
