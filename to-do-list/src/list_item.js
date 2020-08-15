import React, { Component } from 'react'

class ListItem extends Component {

  delete(){
    var id = this.props.todo.id
    this.props.delTodo(id)
  }

  complete(){
    var todo = this.props.todo
    this.props.completeTodo(todo)
  }

  render() {
    return <li>
          <div>{this.props.todo.text}</div>
          <button onClick={this.complete.bind(this)}>Complete</button>
          <button onClick={this.delete.bind(this)}>X</button>
          </li>
  }

}

export default ListItem