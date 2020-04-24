import React from 'react';
import './style.css';
import {Button} from './Button'
export class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [100,100,100]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++){
      random.push( Math.floor( Math.random() * 256) );
    };
    return random;
  }

  formatColor(ary) {
    return `rgb(${ary.join(",")})`;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  isLight() {
    let rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127*3;
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  handleClick() {
    const newColor = this.chooseColor();
    this.setState( {color: newColor});
    this.applyColor();
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button light={ this.isLight() } onClick={this.handleClick} />
    </div>
    )
  }

};