import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review'
    };
  }

  getSortByClass(sortByOptionValue) {
    const val = this.state.sortBy === sortByOptionValue ? 'active' : '';
    return val;
  }

  handleSortByChange(sortByOptionValue) {
    this.setState({ sortBy: sortByOptionValue });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  renderSortByOptions() {
    const keys = Object.keys(this.sortByOptions);
    const listSortOptions = keys.map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      )
    });
    // console.log(this.state.sortBy);
    return listSortOptions;
  };

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange.bind(this)} />
          <input placeholder="Where?" onChange={this.handleLocationChange.bind(this)} />
        </div>
        <div className="SearchBar-submit">
          <a href="#" onClick={this.handleSearch.bind(this)}>Let's Go</a>
        </div>
      </div>
    );
  };
};

export default SearchBar;