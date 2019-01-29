import React from 'react'
import { connect } from 'react-redux';

const ToDoList = (props) => {
  return (
    <div>
      {props.todos.map(todo => {
        return <p>{todo.task}</p>
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { })(ToDoList)