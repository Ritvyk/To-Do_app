import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { id, title, iscompleted } = this.props.todoItem;
    const styling = {
      display: iscompleted ? "block" : "none"
    };
    return (
      <div key={id}>
        <div className=" pt-2 pr-4 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center">
            <input
              type="checkbox"
              onChange={this.props.markCompleteFunc.bind(this, id)}
            />
            <p className="m-0 ml-2 p-0 text-left">{title}</p>
            <span style={styling} className="ml-2 badge badge-success ">
              Completed <i className="fa fa-check" />
            </span>
          </div>
          <div>
            <button
              onClick={this.props.deleteTodoFunc.bind(this, id)}
              className="badge badge-danger text-white border-0"
            >
              {" "}
              X{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
