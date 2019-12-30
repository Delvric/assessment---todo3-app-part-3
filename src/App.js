import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, clearCompletedTodo, toggleTodo, deleteTodo } from "./action";
import TodoList from "./todoList.js";
class App extends Component {
  state = {
    todos: todosList
  };
  handleCreateTodo = (event) => {
    if (event.key === "Enter") {
      this.props.addTodo(event.target.value);
      event.target.value = "";
    }
  };
  handleCompletedTodo = event => {
    console.log("todos were cleared");
    this.props.clearCompletedTodo();
  };
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown = {this.handleCreateTodo}
            />
        </header>
        <Route exact path = "/">
        <TodoList 
          todos={this.props.todos} 
          />
          </Route>
          <Route exact path = "/active">
        <TodoList 
          todos={this.props.todos.filter(todo => todo.completed === false)} 
          />
          </Route>
          <Route exact path = "/completed">
        <TodoList 
          todos={this.props.todos.filter(todo => todo.completed === true)} 
          />
          </Route>
        <footer className="footer">
          <span className="todo-count">
          <strong>{this.props.todos.filter(todo => {
              if (todo.completed === false) {
                return true;
              }
              return false;
            }).length
            }</strong>item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact activeClassName = "selected"
              to="/">All</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName = "selected"
              to="/active">Active</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName = "selected"
              to="/completed">Completed</NavLink>
            </li>
          </ul>
          <button onClick = {this.handleCompletedTodo} 
          className="clear-completed">Clear completed</button>
        </footer>
      </section>
          
    );
  }
}
const mapDispatchToProps = {
  addTodo,
  clearCompletedTodo,
  deleteTodo,
  toggleTodo
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);







