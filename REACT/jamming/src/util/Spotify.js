import React from 'react';

const accessToken = '';
const expiresIn = '';
const clientID = '65ead4c4b861435a9fe892bbce377b70';
const redirectURI = 'http://localhost:3000/';

export class Spotify extends React.Component {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      let queryString = window.location.search;
      console.log(queryString);
      const urlParams = new URLSearchParams(queryString);
      accessToken = urlParams.get('access_token');
      expiresIn = urlParams.get('expires_in');

      window.setInterval(() => accessToken = '', expiresIn * 1000)
    }
  }

  render() {
    return (
      <div>
        <h1>Very good!</h1>
        <h2 style={{ padding: '20px' }}>{this.getAccessToken()}</h2>
      </div>

    )
  }
}