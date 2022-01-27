import React, { Component } from "react";
import { GrClose } from "react-icons/gr";

import styles from "./todo.module.css";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
    };
  }

  //edit for remove of task
  removeTask = () => {
    this.props.isDone(this.state.id);
    alert("lol")
  };

  render() {
    return (
      <div className={styles.container}>
        <div>{this.props.title}</div>
        <div className={styles.icons} onClick={this.removeTask}>
          <GrClose />
        </div>
      </div>
    );
  }
}

export default ToDo;
