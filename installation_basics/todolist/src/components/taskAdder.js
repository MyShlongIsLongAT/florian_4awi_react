import React, { Component } from "react";
import styles from './taskAdder.module.css';

class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  };

  addTask = () =>{
    this.props.onTaskAdded(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          className={styles.inputField}
          placeholder="Insert Todo..."
        />
        <button onClick={this.addTask}>Save</button>
      </div>
    );
  }
}

export default TaskAdder;
