import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList.js";
// import TodoItem from "./TodoItem.js";

class App extends Component {
  state = {
    todos: todosList
  };
  handleCreateTodo = (event) => {
    if (event.key === "Enter"){
      const newTodo = {
        "userId": 1,
        "id": Math.random( ) * 100000,
        "title": event.target.value,
        "completed": false
      };
      const newTodoList = this.state.todos.slice();
      newTodoList.push(newTodo);
      this.setState({ todos: newTodoList })
      event.target.value = "";
    }
  };
  handleCompleteTd1= (event, todoIdMarker) => {
    const newMarker = this.state.todos.map(todo => {
      if (todo.id === todoIdMarker) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState ({ todos: newMarker });
  };
  handleVanish = (event, todoRemove) => {
    const newRemove = this.state.todos.filter(todo => {
      if(todo.id === todoRemove) {
        return false;
      }
      return true;
    });
    this.setState({ todos: newRemove });
  };

  handleCompletedDelvric = event => {
    const newTodoList = this.state.todos.filter(todo => {
      if(todo.completed === true) {
        return false;
      }
      return true;
    });
    this.setState({ todos: newTodoList });
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
            onKeyDown ={this.handleCreateTodo}
          />
        </header>
        <Route exact path = "/">
        <TodoList 
          handleCompleteTd1 = {this.handleCompleteTd1}
          handleVanish = {this.handleVanish}
          todos={this.state.todos} 
          />
          </Route>
          <Route exact path = "/active">
        <TodoList 
          handleCompleteTd1 = {this.handleCompleteTd1}
          handleVanish = {this.handleVanish}
          todos={this.state.todos.filter(todo => todo.completed === false)} 
          />
          </Route>
          <Route exact path = "/completed">
        <TodoList 
          handleCompleteTd1 = {this.handleCompleteTd1}
          handleVanish = {this.handleVanish}
          todos={this.state.todos.filter(todo => todo.completed === true)} 
          />
          </Route>
        {/* <TodoList todos={this.state.todos} 
        handleCompleteTd1= {this.handleCompleteTd1}
        handleVanish= {this.handleVanish}/> */}
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.state.todos.filter(todo =>
                /*return true/false*/
                todo.completed === false).length
              }
              </strong>
              item(s) left
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
          <button className="clear-completed" onClick={this.handleCompletedDelvric}>Clear completed</button>
        </footer>
      </section>
    );
  }
}




export default App;
