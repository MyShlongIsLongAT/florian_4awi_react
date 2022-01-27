import React, { Component } from "react";
import ToDo from "./todo.js";
import styles from "./todoList.module.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  removeTask = (id)=>{
    this.props.onTaskRemoved(id)
  }

  getAllTodos(){
    let widgets = [];
    this.props.todos.forEach((todo) => {
      widgets.push(<ToDo title={todo.name} id={todo.id} isDone={this.removeTask}/>);
    });
    return widgets;
  };
  
  render() {
    return (
      <div className={styles.center}>
        <div className={styles.container}>{this.getAllTodos()}</div>
      </div>
    );
  }
}

export default ToDoList;
