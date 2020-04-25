import React from 'react';
import { Video } from './video';
import { Menu } from './menu';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

export class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({ src: VIDEOS[newVideo] });
  }

  // handleSelect(option) {
  //   // console.log(`option selected is ${option}`);
  //   switch (option) {
  //     case 'fast':
  //       this.setState({ src: VIDEOS.fast});
  //       break;
  //     case 'slow':
  //       this.setState({ src: VIDEOS.slow});
  //       break;
  //     case 'cute':
  //       this.setState({ src: VIDEOS.cute});
  //       break;   
  //     default:
  //       this.setState({ src: VIDEOS.eek});
  //       break;             
  //   };
  // }

  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: 'blue' }}>Video Player</h1>
        {/* <Menu onSelect={this.handleSelect}/> */}
        <Menu onSelect={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}
