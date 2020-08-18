import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      status: "incomplete"
    }
  }

  delete(){
    var id = this.props.todo.id
    this.props.delTodo(id)
  }

  complete(){
    var todo = this.props.todo
    if(this.state.status === "complete"){
      this.setState({status: "incomplete"})
    } else {
      this.setState({status: "complete"})
    }
    this.props.completeTodo(todo)
  }

  render() {
    return <li>
          <label class="b-contain">
	        <span class={this.state.status}>{this.props.todo.text}</span>
	        <input type="checkbox" onClick={this.complete.bind(this)}/>
	        <div class="b-input"></div>
          <button class="delete" onClick={this.delete.bind(this)}>X</button>
          </label>
          </li>
  }

}

export default ListItem