export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO'

export const addTodo = todoTitle => {
    const newTodo = {
        userId: 1,
        id: Math.floor(Math.random() * 1000000000),
        title: todoTitle,
        completed: false
    };
    return{
        type: ADD_TODO,
        payload: newTodo
    }
}
export const toggleTodo = (newTodolist) => {
    return{
        type: TOGGLE_TODO,
        payload: newTodolist 
    }
}
export const deleteTodo = (newTodoList1) => {
    return{
        type: DELETE_TODO,
        payload: newTodoList1
    }
}
export const clearCompletedTodo = (newTodoLists) => {
    return{
        type: CLEAR_COMPLETED_TODO,
        payload: newTodoLists
    }
}