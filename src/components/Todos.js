import React, { Component } from "react";

import Todo from "./sub_components/Todo";

export default class Todos extends Component {
  render() {
    return this.props.tasks.map(todoItem => {
      return (
        <div className="pl-4">
          <Todo
            markCompleteFunc={this.props.markCompleteFunc}
            deleteTodoFunc={this.props.deleteTodoFunc}
            todoItem={todoItem}
            className="todoItem"
          />
        </div>
      );
    });
  }
}
