import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/types'

const initialState = [
    { task: 'finish building ToDo App', id: (Date.now() + 1), completed: false},
    { task: 'work out', id: (Date.now() + 2), completed: false },
    { task: 'pray the rosary', id: (Date.now() + 3), completed: false },
    { task: 'brush my teeth', id: (Date.now() + 4), completed: false }
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
                'e'
            )
          default:
            return state
      }
  }


  export default rootReducer