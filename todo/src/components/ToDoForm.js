import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/index'
class ToDoList extends React.Component {
    state = {
      task: '',
      id: 0,
      completed: false
    }
    handleChanges = e => {
      e.preventDefault()
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    }
  render() {
    return (
        <form className="form-container">
            <input type="text" name="task" value={this.state.task} onChange={this.handleChanges} />
        </form>
  )
}
}


export default ToDoList