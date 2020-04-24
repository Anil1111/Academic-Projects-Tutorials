import React from 'react';
import {ChildII} from './child';

export class ParentII extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClick: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let clickCount = this.state.totalClick;
    this.setState({
      totalClick: clickCount+1
    });
  }

  render() {
    return (
      <div>
        <h1>The count is {this.state.totalClick}</h1>
        <ChildII onClick={ this.handleClick}/>
      </div>
    )
  }
};