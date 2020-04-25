import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import { yelp } from '../../util/yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  async searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    yelp.search(term, location, sortBy)
      .then(businesses => {
        this.setState({ businesses })
      })
    // this.setState({
    //   businesses: await yelp.search(term, location, sortBy)
    // });


  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp.bind(this)} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }

}

export default App;
