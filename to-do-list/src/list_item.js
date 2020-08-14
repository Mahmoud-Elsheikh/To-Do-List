import React, { Component } from 'react'

class ListItem extends Component {

  render() {
    return <l1>
          <div>{this.props.todo.text}</div>
          <button>Complete</button>
          <button>X</button>
          </l1>
  }

}

export default ListItem