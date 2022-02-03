import React, { Component } from "react";
import styles from "./errorAlert.modules.css";

class ErrorAlert extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.message)}
        <div className={styles.ErrorMessage}>
          {this.props.message}
        </div>
      </div>
    );
  }
}

export default ErrorAlert;
