import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <h1>I am an {props.inputText}</h1>
  )
}

Input.propTypes = {
  inputText: PropTypes.string.isRequired
}