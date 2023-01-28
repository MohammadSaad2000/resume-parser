import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-dark text-light p-3">
            <img className="d-flex flex-row bg-dark text-light mx-3" src="/logo.png" alt="logo"></img>
            <h1>Online Resume Parser</h1>
        </div>
    );
  }
}

export default Banner;