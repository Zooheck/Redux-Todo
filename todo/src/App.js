import React, { Component } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
      </div>
    );
  }
}

export default App;
