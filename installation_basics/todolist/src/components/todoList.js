import React, { Component } from "react";
import ToDo from "./todo";
import styles from "./todoList.module.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  getAllTodos = () => {
    let widgets = [];
    this.props.todos.forEach((element) => {
      widgets.push(<ToDo name={element.name} />);
    });
    return widgets;
  };

  state = {};
  render() {
    return (
      <div className={styles.center}>
        <div className={styles.container}>{this.getAllTodos}</div>
      </div>
    );
  }
}

export default ToDoList;
