import React, { Component } from 'react'

class List extends Component {

  render() {
    return <div>I'm displaying text from my parent: {this.props.inputText}</div>
  }

}

export default List