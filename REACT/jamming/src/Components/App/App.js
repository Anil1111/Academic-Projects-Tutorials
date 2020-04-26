import React from 'react';
import './App.css';
import { Playlist } from '../Playlist/Playlist';
import { SearchResults } from '../SearchResults/SearchResults';
import { SearchBar } from '../SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'Mix',
          artist: 'Eminem',
          album: 'Revolution',
          id: '2020'
        },
        {
          name: 'MixII',
          artist: 'EminemII',
          album: 'RevolutionII',
          id: '2022'
        }
      ],
      playlistName: 'Richards Special',
      playlistTracks: [
        {
          name: 'Mix',
          artist: 'Eminem',
          album: 'Revolution',
          id: '2020',
          uri: 'abc'
        },
        {
          name: 'MixII',
          artist: 'EminemII',
          album: 'RevolutionII',
          id: '2022',
          uri: 'efg'
        }
      ]
    }
  }

  addTrack(track) {
    const trackPresent = this.state.playlistTracks.some(oldTrack => {
      return track.id === oldTrack.id
    });
    if (!trackPresent) {
      this.setState({
        playlistTracks: this.state.playlistTracks.push(track)
      });
    }
  }

  removeTrack(track) {
    const newPlaylist = this.state.playlistTracks.filter(oldTrack => {
      return track.id !== oldTrack.id
    });
    this.setState({
      playlistTracks: newPlaylist
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => {
      return track.uri;
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack.bind(this)} />
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack.bind(this)}
              onNameChange={this.updatePlaylistName.bind(this)} onSave={this.savePlaylist.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
