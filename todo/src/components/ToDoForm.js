import React from 'react'
import { connect } from 'react-redux';
import { addTodo, toggleCompleted, removeCompleted, deleteTask } from '../actions/index'

import './todo-form.css'

class ToDoForm extends React.Component {
    state = {
      task: '',
      completed: false
    }
    handleChanges = e => {
      e.preventDefault()
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    }
    addTodo = e => {
      e.preventDefault()
      this.props.addTodo(this.state)
    }
    toggleCompleted = (e, index) => {
      e.preventDefault()
      this.props.toggleCompleted(index)
    }
    removeCompleted = (e) => {
      e.preventDefault()
      this.props.removeCompleted()
    }
    deleteTask = (e, index) => {
      e.preventDefault()
      this.props.deleteTask(index)
    }
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          return (
            <div className="todo-item">
              <p key={index} onClick={e => this.toggleCompleted(e, index)} className={todo.completed ? 'completed' : null}>{todo.task}</p>
              <button onClick={e => this.deleteTask(e, index)}>Delete This Task</button>
            </div>
          )
        })}
        <form className="form-container">
            <input type="text" name="task" value={this.state.task} onChange={this.handleChanges} />
            <button type="submit" onClick={this.addTodo}>Add New Task</button>
            <button onClick={this.removeCompleted}>Remove Completed Tasks</button>
        </form>
        
      </div>
  )
}
}


const mapStateToProps = (state) => {
  return {
    todos: state
  }
}


export default connect(mapStateToProps, { addTodo, toggleCompleted, removeCompleted, deleteTask })(ToDoForm)