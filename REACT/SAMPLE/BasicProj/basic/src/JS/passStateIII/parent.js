import React from 'react';
import { ChildIII } from './child';
import {SiblingIII} from './sibling';

export class ParentIII extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <SiblingIII name={this.state.name}/>
        <ChildIII onChange={this.changeName} />
      </div>
    )
  }
}
