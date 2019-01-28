import { ADD_TODO, TOGGLE_COMPLETED } from './types'

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleCompleted = () => {
    return {
        type: TOGGLE_COMPLETED,
        payload: null
    }
}