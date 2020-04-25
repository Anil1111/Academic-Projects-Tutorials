import React from 'react';
import PropTypes from 'prop-types';

// export class GuineaPigs extends React.Component {

//   render() {
//     return (
//       <div>
//         <h1>Cute Guinea Pigs</h1>
//         <img src={this.props.src} alt="pigs" />
//       </div>
//     );
//   }
// }


export const GuineaPigs = (props) => {
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={props.src} alt="pigs" />
    </div>
  )
};

GuineaPigs.propTypes = {
  src: PropTypes.string.isRequired
};