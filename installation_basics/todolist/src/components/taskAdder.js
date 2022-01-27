import React, { Component } from "react";

class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  addTask = () => {
    alert("adding");
  };

  handleChange = () => {
    console.log("on input");
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.addTask}>Save</button>
      </div>
    );
  }
}

export default TaskAdder;
