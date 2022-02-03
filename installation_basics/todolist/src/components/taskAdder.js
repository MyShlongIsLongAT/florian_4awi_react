import React, { Component } from "react";
import styles from "./taskAdder.module.css";
import Button from "@mui/material/Button";

class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addTask = () => {
    this.props.onTaskAdded(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            className={styles.inputField}
            placeholder="Insert Todo..."
          />
        </div>
        <div >
          <Button onClick={this.addTask} variant="contained"className={styles.inputButton}>
            Add Todo
          </Button>
        </div>
      </div>
    );
  }
}

export default TaskAdder;
