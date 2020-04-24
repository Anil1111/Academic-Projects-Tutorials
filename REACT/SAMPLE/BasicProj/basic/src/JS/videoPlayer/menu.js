import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    // this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // handleCheck(e) {
  //   const option = e.target.value;
  //   // console.log(option);
  //   this.props.onSelect(option);
  // }

  handleClick(event) {
    const option = event.target.value;
    this.props.onSelect(option);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }

  // render() {
  //   return (
  //     <form>
  //       <input type="radio" name="src" value="fast" onChange={this.handleCheck}/> fast
  //       <input type="radio" name="src" value="slow" onChange={this.handleCheck}/> slow
  //       <input type="radio" name="src" value="cute" onChange={this.handleCheck}/> cute
  //       <input type="radio" name="src" value="eek" onChange={this.handleCheck}/> eek
  //     </form>
  //   );
  // }
}