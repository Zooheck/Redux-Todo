import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
