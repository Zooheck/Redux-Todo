import React from 'react'
import { connect } from 'react-redux';
import { addTodo, toggleCompleted, removeCompleted, deleteTask } from '../actions/index'

import './todo-form.css'

class ToDoForm extends React.Component {
    state = {
      task: '',
      completed: false,
      id: Date.now()
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
      this.setState({
        task: '',
        completed: false,
        id: Date.now()
      })
    }
    toggleCompleted = (e, id) => {
      e.preventDefault()
      this.props.toggleCompleted(id)
    }
    removeCompleted = (e) => {
      e.preventDefault()
      this.props.removeCompleted()
    }
    deleteTask = (e, id) => {
      e.preventDefault()
      this.props.deleteTask(id)
    }
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          return (
            <div className="todo-item">
              <p key={todo.id} onClick={e => this.toggleCompleted(e, todo.id)} className={todo.completed ? 'completed' : null}>{todo.task}</p>
              <button onClick={e => this.deleteTask(e, todo.id)}>Delete This Task</button>
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