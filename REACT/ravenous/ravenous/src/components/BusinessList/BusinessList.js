import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
  render() {
    return (
      <div class="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />            
      </div>
    );

  }
};

export default BusinessList;