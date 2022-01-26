import React, { Component } from "react";

class TaskAdder extends Component {
  addTask = () => {
    alert("adding");
  };

  handleChange = () => {
    console.log("on input");
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  state = {
    inputValue: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.addTask}>Save</button>
      </div>
    );
  }
}

export default TaskAdder;
