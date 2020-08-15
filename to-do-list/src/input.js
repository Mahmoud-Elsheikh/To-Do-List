import React, { Component } from 'react'

class TextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state={
      inputText: 'initial text'
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
          placeholder="This is going to be text"
          value={this.state.inputText}
        />
        <input type="submit" text="+"/>
      </form>
    )
  }

}

export default TextInput