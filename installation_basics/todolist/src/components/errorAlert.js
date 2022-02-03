import React, { Component } from 'react';
import styles from "./errorAlert.modules.css";

class ErrorAlert extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <div>
        {console.log(this.props.message)}
      </div>
     );
  }
}
export default ErrorAlert;