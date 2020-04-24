import React from 'react';
import {Greeting} from './Greeting';

export class MainApp extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting signedIn={true}/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}


