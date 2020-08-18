import React, { Component } from 'react'

class TextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state={
      inputText: ''
    }
  }


  Submit(event) {
    event.preventDefault()
    var text= this.state.inputText
    if (text!==""){
      this.props.addTodo(this.state.inputText)
    }
    this.setState({inputText: ""})
  }

  handleChange(event) { 
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.Submit.bind(this)}>
        <input onChange={this.handleChange.bind(this)}
          type="text"
          class = "input"
          placeholder="Write a new Task..."
          value={this.state.inputText}
        />
        <input class="submit" type="submit"/>
      </form>
    )
  }

}

export default TextInput