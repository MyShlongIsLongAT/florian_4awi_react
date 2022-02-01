import React, { Component } from "react";
import { GrClose } from "react-icons/gr";

import styles from "./todo.module.css";

class ToDo extends Component {
  //edit for remove of task
  removeTask = () => {
    console.log("Delete id: " + this.props.id);
    this.props.isDone(this.props.id);
  };

  render() {
    return (
      <div className={styles.container}>
        <div>
          {this.props.title}:{this.props.id}
        </div>
        <div className={styles.icons} onClick={this.removeTask}>
          <GrClose />
        </div>
      </div>
    );
  }
}

export default ToDo;
