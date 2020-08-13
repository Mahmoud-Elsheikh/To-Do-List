import React, { Component } from 'react'

class TextInput extends Component {

  constructor(props, context) {
    super(props, context)
  }



  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.props.inputText}
          //onChange={this.handleChange.bind(this)}
        />
        <input type="submit"/>
      </form>
    )
  }

}

export default TextInput