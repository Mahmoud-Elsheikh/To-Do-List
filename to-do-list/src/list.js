import React, { Component } from 'react'
import ListItem from './list_item'

class List extends Component {

  render() {
    return <ul>
       {
          this.props.todos.map((todo) => {
            return <ListItem todo={todo}/>
          })
        }
    </ul>
  }

}

export default List