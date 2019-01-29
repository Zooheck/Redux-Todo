import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/index'
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
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          return <p key={index}>{todo.task}</p>
        })}
        <form className="form-container" onSubmit={this.addTodo}>
            <input type="text" name="task" value={this.state.task} onChange={this.handleChanges} />
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


export default connect(mapStateToProps, { addTodo })(ToDoForm)