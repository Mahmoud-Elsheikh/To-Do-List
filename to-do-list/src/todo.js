import React, { Component } from 'react'
import Input from './input'
import List from './list'

class Todo extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: [{id:0, text: "Inital",completed: false}]
    }
  }

  addTodo(inputText) { 
    this.setState({
      todos: [...this.state.todos, {text:inputText, completed: false}]
    })
  }

  delTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }




  render() {
    return (
      <div>
        <Input addTodo={this.addTodo.bind(this)}></Input>
        <List todos={this.state.todos} delTodo={this.delTodo.bind(this)}></List>
      </div>
    )
  }

}

export default Todo