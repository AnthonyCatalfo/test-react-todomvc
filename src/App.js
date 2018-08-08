import React, { Component } from 'react';
import './App.css';

let c = 0
let deleteTodo = (arr, id) => arr.filter(e => e.id !== id)
let getTodo = (arr, id) => arr.filter(e => e.id === id)
let makeID = () => c++

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }
  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = makeID()
    const newTodo = { id: newId, name: this.state.currentTodo.trim(), isComplete: false }
    const updatedTodos = [...this.state.todos, newTodo]
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
    }) 
  }
  handleEmpty = (evt) => {
    evt.preventDefault()
  }
  handleRemove = (id) => {
    const updatedTodos = deleteTodo(this.state.todos, id)
    this.setState({ todos: updatedTodos })
  }
  handleOnChange = (evt) => {
    evt.preventDefault();
    let _id = parseInt(evt.target.value, 10)
    let _name = evt.target.name
    let _isComplete = (evt.target.checked === 'false') ? true : false
    const newTodo = { id: _id, name: _name, isComplete: _isComplete }
    const updatedTodos = [...this.deleteTodo(this.state.todos, _id), newTodo]
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
    })
  }
  handleToggle = (id) => {
    const index = this.state.todos.findIndex(e => e.id === id)
    const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete })
    const findById = (id, list) => list.filter(item => item.id === id)[0]
    const todo = findById(id, this.state.todos)
    const toggled = toggleTodo(todo)
    const updatedTodos = [...this.state.todos.slice(0, index), toggled, ...this.state.todos.slice(index + 1)]
    this.setState({ todos: updatedTodos })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> {this.state.todos.length}{(this.state.todos.length === 1) ? " item" : " items"}</h2>
        </div>
        <div className="Todo-App">
          <form onSubmit={(this.state.currentTodo) ? this.handleSubmit : this.handleEmpty}>
            <input type="text" autofocus="true" onChange={this.handleInputChange} value={this.state.currentTodo} />
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo => <li key={todo.id} ><span className='delete-item'>
                <a href="#" onClick={() => this.handleRemove(todo.id)}>X</a></span>
                <input type="checkbox" onChange={() => this.handleToggle(todo.id)} checked={todo.isComplete} />
                {todo.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
