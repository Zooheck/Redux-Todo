import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_COMPLETED, DELETE_TASK } from './types'

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleCompleted = (index) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    }
}

export const removeCompleted = () => {
    return {
        type: REMOVE_COMPLETED
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index
    }
}