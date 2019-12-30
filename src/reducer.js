import todosList from "./todos.json";
import { ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODO, TOGGLE_TODO } from './action'

//import { create } from "domain";
//import { TOGGLE_TODO } from "./action.js";


const initialState ={
    todos: todosList
};


const todosReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO: 
        const newTodoList = state.todos.slice();
        newTodoList.push(action.payload);
        
            return { todos: newTodoList };
        

            case DELETE_TODO:
                    const newtodolist = state.todos.filter(todo => {
                        if(todo.id === action.payload) {
                          return false;
                        }
                        return true;
                      });
                      return { todos: newtodolist };

        case TOGGLE_TODO:
                const newTodolist = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                      return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                  });
                    return { todos: newTodolist};

            // overwrite the original with the modified copy

            return { todos: newTodoList};

        
        case CLEAR_COMPLETED_TODO:
            //copy the state to be modified

        const newTodoLists = state.todos.filter(todo => {
            //expecting you to return either true or false
            if (todo.completed === true){
                return false;
            }
            return true;
        });
        
        //overwrite the original with copy
        return { todos: newTodoLists};
    

        default:
            return state;
    }
}

export default todosReducer