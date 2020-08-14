import React, { Component } from 'react'

class ListItem extends Component {

  delete(){
    var id = this.props.todo.id
    this.props.delTodo(id)
  }
  render() {
    return <l1>
          <div>{this.props.todo.text}</div>
          <button>Complete</button>
          <button onClick={this.delete.bind(this)}>X</button>
          </l1>
  }

}

export default ListItem