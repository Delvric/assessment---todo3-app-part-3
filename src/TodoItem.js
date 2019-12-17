import React, { Component } from "react";
import "./index.css";
// import todosList from "./todos.json";



class TodoItem extends Component {
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onChange= {this.props.handleCompleteTd1}
            />
            <label>{this.props.title}</label>
            <button className="destroy" onClick = {this.props.handleVanish} />
          </div>
        </li>
      );
    }
  }
  export default TodoItem