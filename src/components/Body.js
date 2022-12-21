import React, { Component } from "react";

import styles from "../styles/body.module.css";

export default class Body extends Component {
  render() {
    const { children } = this.props;
    return <div className={styles.body}>{children}</div>;
  }
}
