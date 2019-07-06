import React, { Component } from 'react';
import './App.css';

const Search = ({
    value,
    onChange,
    onSubmit,
    children
  }) => {
    let input;
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    );
  }

  export {
    Search,
  }