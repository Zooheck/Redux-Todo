import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_COMPLETED, DELETE_TASK } from '../actions/types'

const initialState = [
    { task: 'finish building ToDo App', completed: false},
    { task: 'work out', completed: false },
    { task: 'pray the rosary', completed: false },
    { task: 'brush my teeth', completed: false }
  ];

  const rootReducer =(state = initialState, action) => {
      switch(action.type) {
          case ADD_TODO:
            return (
                [...state,
                action.payload]
            )
        case TOGGLE_COMPLETED:
            return (  
                state.map((task, index) => {
                    if (action.payload === index) {
                        return {...task, completed: !task.completed}
                    }
                    return task
                })
            )
        case REMOVE_COMPLETED:
                return (
                    state.filter(task => task.completed === false)
                )
        case DELETE_TASK:
                    console.log(action.payload)
                return (
                    state.filter(task => {
                        return task !== state[action.payload]
                    })
                )
          default:
            return state
      }
  }


  export default rootReducer