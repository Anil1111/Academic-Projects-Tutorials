import React from 'react';
import { AttentionGrabber } from './AttentionGrabber';
import { styles } from './cusStyle';

const divStyle = {
  background: styles.background,
  height: '100%'
};

export class Style extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}
