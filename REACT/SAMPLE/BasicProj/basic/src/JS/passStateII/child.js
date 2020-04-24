import React from 'react';

export class ChildII extends React.Component {
  render() {
    return (
      <button onClick = {this.props.onClick}>
        Click!
      </button>
      )  
  }
};