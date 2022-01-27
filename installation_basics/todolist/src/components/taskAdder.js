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

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  };

  addTask = () =>{
    this.props.onAddTask(this.state.inputValue);
  }

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
