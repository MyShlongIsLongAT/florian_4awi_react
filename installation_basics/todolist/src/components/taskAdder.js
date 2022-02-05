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
    if (this.state.inputValue.length<=100){
      this.setState({
        inputValue: event.target.value,
      });
    }
    else if (this.state.inputValue.length<100 && event.keyCode === 8){
      this.setState({
        inputValue: event.target.value,
      });
    }
    else{
      return;
    }
  };

  addTask = () => {
    if (this.state.inputValue !== "") {
      this.props.onTaskAdded(this.state.inputValue);
      this.setState({
        inputValue: "",
      });
    }
  };

  handleKeyDown = event => {
    //it triggers by pressing the enter key
  if (event.keyCode === 13) {
    this.addTask();
  }
};

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className={styles.inputField}
            placeholder="Insert Todo... (0-100 Characters)"
            maxLength="100"
          />
        </div>
        <div className={styles.inputButton}>
          <Button onClick={this.addTask} variant="contained">
            Add Todo
          </Button>
        </div>
      </div>
    );
  }
}

export default TaskAdder;
