import React from 'react';


const green = '#39D1B4';
const yellow = '#FFD712';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
  }

  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState( {color: newColor});
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor.bind(this)}>
  				Change color
				</button>
      </div>
    )
  }
};