import React, { Component } from 'react'
import Input from './input'
import List from './list'

class Todo extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: []
    }
  }

  recalibrate(initial){ 
     var final =  initial.map((todo,idx) => {return {id: idx, text: todo.text, completed: todo.completed}})
     this.setState({
      todos: final
    })
    console.log(final) 
  }

  addTodo(inputText) { 
    var initial = [...this.state.todos, {id:0, text:inputText, completed: false}]
    this.recalibrate(initial)
  }

  delTodo(id){
    var initial = this.state.todos.filter(todo => todo.id !== id)
    this.recalibrate(initial)
  }

  completeTodo(todo){
    this.setState({
      todos: [...(this.state.todos.filter(todoitem => todoitem.id !== todo.id)), {id:todo.id, text:todo.text, completed: !todo.completed}]
    })
  }


  render() {
    return (
      <div>
        <Input addTodo={this.addTodo.bind(this)}></Input>
        <List todos={this.state.todos} delTodo={this.delTodo.bind(this)} completeTodo={this.completeTodo.bind(this)}></List>
      </div>
    )
  }

}

export default Todo