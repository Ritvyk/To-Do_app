import React, { Component } from "react";
import "./styles.css";

//componenets import
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class UI {
  static throwResponse(type, msg) {
    let alertBox = document.createElement("div");
    alertBox.classList = "alert uialert";
    if (type === "err") {
      alertBox.classList.add("alert-danger");
    }
    if (type === "info") {
      alertBox.classList.add("alert-success");
    }

    alertBox.innerText = msg;
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 3000);
  }
}

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Homework Of Science",
        iscompleted: false
      },
      {
        id: 2,
        title: "Practising Competitve On Hackerearth",
        iscompleted: false
      },
      {
        id: 3,
        title: "Freinds Birthday treat!",
        iscompleted: false
      },
      {
        id: 4,
        title: "Workout",
        iscompleted: false
      },
      {
        id: 5,
        title: "Completing the chapter of novel",
        iscompleted: false
      }
    ]
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(item => item.id !== id)]
    });

    UI.throwResponse("info", "Deleted Successfully!");
  };

  markComplete = id => {
    let currentTodos = this.state.todos;
    currentTodos.forEach(todo => {
      if (todo.id === id) {
        todo.iscompleted = !todo.iscompleted;
      }
    });
    this.setState({
      todos: currentTodos
    });
  };

  addTodo = title => {
    if (title === "") {
      UI.throwResponse("err", "Empty Field | NULL ");
      return;
    }
    const todoObject = {
      id: this.state.todos.length + 1,
      title: title
    };

    this.setState({
      todos: [todoObject, ...this.state.todos]
    });
    UI.throwResponse("info", "Added Successfully!");
  };

  render() {
    return (
      <div className="App shadow shadow-sm">
        <Header />
        <Todos
          tasks={this.state.todos}
          markCompleteFunc={this.markComplete}
          deleteTodoFunc={this.deleteTodo}
        />

        <AddTodo addTodoFunc={this.addTodo} />
      </div>
    );
  }
}
