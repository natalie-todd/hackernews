import React, { Component } from 'react';
import './App.css';

const Button = ({
  onClick,
  className,
  children,
}) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

Button.defaultProps = {
  className: '',
};


export {
  Button,
};