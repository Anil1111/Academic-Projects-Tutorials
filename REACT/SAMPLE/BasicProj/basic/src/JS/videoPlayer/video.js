import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autoPlay muted src={this.props.src}/>
      </div>
    );
  }
}