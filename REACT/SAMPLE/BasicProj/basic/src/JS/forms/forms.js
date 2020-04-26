import React from 'react';
import { Input } from './input';

export class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.state.inputText} />
        <Input inputText={this.state.inputText} />
        {/* <h1>{this.state.inputText}</h1> */}
      </div>
    )
  }
};