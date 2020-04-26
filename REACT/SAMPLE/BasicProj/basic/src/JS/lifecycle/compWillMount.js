import React from 'react';

export class Flashy extends React.Component {
  componentWillMount() {
    // alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
    // alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }

  render() {
    // alert('Flashy is rendering!');

    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

