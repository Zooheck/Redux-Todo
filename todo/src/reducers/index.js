import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_COMPLETED, DELETE_TASK } from '../actions/types'

const initialState = [
    { task: 'finish building ToDo App', completed: false, id: 0},
    { task: 'work out', completed: false, id: 1 },
    { task: 'pray the rosary', completed: false, id: 2 },
    { task: 'brush my teeth', completed: false, id: 3 }
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
                state.map(task => {
                    if (action.payload === task.id) {
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
                        return task.id !== action.payload
                    })
                )

          default:
            return state
      }
  }


  export default rootReducer