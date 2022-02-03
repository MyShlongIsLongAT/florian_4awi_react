import React, { Component } from "react";
import { GrClose } from "react-icons/gr";

import styles from "./todo.module.css";

class ToDo extends Component {
  removeTask = () => {
    this.props.isDone(this.props.id);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.todoText}>
          {this.props.title}
        </div>
        <div className={styles.icons} onClick={this.removeTask}>
          <GrClose />
        </div>
      </div>
    );
  }
}

export default ToDo;
