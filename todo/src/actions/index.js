import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_COMPLETED, DELETE_TASK } from './types'

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleCompleted = (id) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}

export const removeCompleted = () => {
    return {
        type: REMOVE_COMPLETED
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}