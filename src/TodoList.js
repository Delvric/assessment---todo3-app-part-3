import React, { Component } from "react";
import "./index.css";
// import todosList from "./todos.json";
import TodoItem from "./TodoItem.js";




class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map(todo => (
              <TodoItem title={todo.title} completed={todo.completed} id = {todo.id}
              key={todo.id}
              handleCompleteTd1 = { event => this.props.handleCompleteTd1(event, todo.id)}
              handleVanish = {event => this.props.handleVanish(event, todo.id)}/>
            ))}
          </ul>
        </section>
      );
    }
  }
export default TodoList  