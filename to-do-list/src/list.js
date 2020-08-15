import React, { Component } from 'react'
import ListItem from './list_item'

class List extends Component {

  render() {
    return <ul>
       {
         this.props.todos.map((todo) => <ListItem key={todo.id} todo={todo} delTodo={this.props.delTodo} completeTodo={this.props.completeTodo}/>)
        }
    </ul>
  }

}

export default List