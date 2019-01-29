import React from 'react'
import { connect } from 'react-redux';
import { addTodo, toggleCompleted, removeCompleted } from '../actions/index'

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
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          return <p key={index} onClick={e => this.toggleCompleted(e, index)} className={todo.completed ? 'completed' : null}>{todo.task}</p>
        })}
        <form className="form-container" onSubmit={this.addTodo}>
            <input type="text" name="task" value={this.state.task} onChange={this.handleChanges} />
        </form>
        <button onClick={this.removeCompleted}>Remove Completed Tasks</button>
      </div>
  )
}
}


const mapStateToProps = (state) => {
  return {
    todos: state
  }
}


export default connect(mapStateToProps, { addTodo, toggleCompleted, removeCompleted })(ToDoForm)