import React, { Component } from "react";

import styles from "../styles/button.module.css";

export default class Button extends Component {
  render() {
    const { name, onClick, disabled } = this.props;
    return (
      <button disabled={disabled} className={styles.button} onClick={onClick}>
        {name}
      </button>
    );
  }
}
