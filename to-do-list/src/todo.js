import React, { Component } from 'react'
import Input from './input'
import List from './list'

class Todo extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: [""],
      inputText: 'initial text'
    }
  }

  handleChange(event) { 
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Input></Input>
        <List inputText={this.state.inputText}></List>
      </div>
    )
  }

}

export default Todo