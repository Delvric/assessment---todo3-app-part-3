import React, { Component } from "react";
import TodoItem from "./todoItem"
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "./action";
// import todosList from "./todos.json";




class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map(todo => (
              <TodoItem title={todo.title}
              completed={todo.completed} 
              id = {todo.id}
              key={todo.id}
             // handleCompleteTd1 = { event => this.props.handleCompleteTd1(event, todo.id)}
             // handleVanish = {event => this.props.handleVanish(event, todo.id)}/>

             handleMarker = {event => this.props.toggleTodo(todo.id)} 
             handleDeletedTodo = {event => this.props.deleteTodo(todo.id)}

            
            

            title={todo.title}
            completed={todo.completed}

             />
            ))}
          </ul>
        </section>
      );
    }
  }

  //this.props.deleteTodo
  //this.props.toggleTodo

  const mapDispatchToProps = {
    deleteTodo,
    toggleTodo
  }
export default connect(null,mapDispatchToProps) (TodoList) 