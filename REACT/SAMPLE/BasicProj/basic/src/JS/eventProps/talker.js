import React from 'react';
import {Button} from './button';

export class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return (
      <Button onClick={this.handleClick} />
    )
  }
};