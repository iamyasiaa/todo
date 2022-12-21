import React, { Component } from "react";

import styles from "../styles/listcard.module.css";

export default class ListCard extends Component {
  render() {
    const { list, deleteTask } = this.props;
    return (
      <div className={styles.list}>
        {list?.map((item, index) => (
          <div className={styles.card} key={index + item.name}>
            <div onClick={() => deleteTask(index)} className={styles.delete}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                  fill="#4830f0"
                />
              </svg>
            </div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    );
  }
}
