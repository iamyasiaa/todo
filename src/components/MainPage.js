import React, { Component } from "react";
import Button from "./Button";
import Body from "./Body";
import Modal from "./Modal";
import ListCard from "./ListCard";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: false,
      arrayTask: [],
    };
  }
  openModal = () => {
    this.setState({
      ...this.state,
      activeModal: true,
    });
  };
  closeModal = () => {
    this.setState({
      ...this.state,
      activeModal: false,
    });
  };
  saveTask = (task) => {
    this.setState({
      ...this.state,
      activeModal: false,
      arrayTask: [...this.state.arrayTask, task],
    });
  };
  deleteTask = (indexTask) => {
    this.setState({
      ...this.state,
      arrayTask: this.state.arrayTask.filter(
        (item, index) => index !== indexTask
      ),
    });
  };

  render() {
    return (
      <Body>
        <Button onClick={this.openModal} name="Добавить задачу" />
        {this.state.activeModal && (
          <Modal onSave={this.saveTask} onClose={this.closeModal} />
        )}
        <ListCard deleteTask={this.deleteTask} list={this.state.arrayTask} />
      </Body>
    );
  }
}
