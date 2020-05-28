import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "" //initially null
  };
  renderChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="d-flex p-2 justify-content-around align-itiems-center mt-3">
        <input
          value={this.state.title}
          name="title"
          className="input w-100 border border-sm "
          placeholder="+Add new todo"
          onChange={this.renderChange}
        />
        <button
          onClick={this.props.addTodoFunc.bind(this, this.state.title)}
          className="bg-light border border-sm btn-sm"
        >
          +Add
        </button>
      </div>
    );
  }
}
