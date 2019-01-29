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
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return <p>{todo.task}</p>
        })}
        <form className="form-container">
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