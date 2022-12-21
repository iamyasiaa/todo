import React, { Component } from "react";
import Button from "./Button";

import styles from "../styles/modal.module.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      name: "",
      description: "",
    };
  }
  hendleChangeName = (ev) => {
    this.setState({
      ...this.state,
      name: ev.target.value,
    });
  };
  hendleChangeDescription = (ev) => {
    this.setState({
      ...this.state,
      description: ev.target.value,
    });
  };
  onClickBody(ev) {
    ev.stopPropagation();
  }
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }
  render() {
    const { name, description } = this.state;
    const { onClose, onSave } = this.props;
    return (
      <div className={styles.modal} onClick={onClose}>
        <div>
          <div className={styles.body} onClick={this.onClickBody}>
            <div className={styles.title}>Создание задачи</div>
            <div className={styles.textField}>
              <div className={styles.lable}>Задача</div>
              <input
                onChange={this.hendleChangeName}
                value={name}
                className={styles.input}
                placeholder="Введите задачу"
              ></input>
            </div>
            <div className={styles.textField}>
              <div className={styles.lable}>Описание</div>
              <textarea
                onChange={this.hendleChangeDescription}
                value={description}
                className={styles.textarea}
                placeholder="Введите описание задачи"
              ></textarea>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => onSave(this.state)}
                name="Сохранить"
                disabled={!name || !description}
              />
              <Button onClick={onClose} name="Отмена" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
