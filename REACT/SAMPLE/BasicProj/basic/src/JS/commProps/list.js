import React from 'react';

export class List extends React.Component {
  render() {
    let titleTexts = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
      titleTexts +='s';
    };
    return (  
      <div>
        <h1>{titleTexts}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
};