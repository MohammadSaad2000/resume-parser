import React, { Component } from 'react';

class ParseResult extends Component {
  
  getResultList() {

    if (this.props.data === null) {
      return '';
    }

    if (this.props.data === "Loading...") {
      return (
        <div className="container my-5">
          <h3 className="d-flex flex-row justify-content-center">Loading...</h3>
        </div>
      );
    }

    const parseResultList = Object.keys(this.props.data).map(key => {

      const keyWords = key.split("_");
      for (let i = 0; i < keyWords.length; i++) {
        keyWords[i] = keyWords[i][0].toUpperCase() + keyWords[i].substring(1);
      }

      const attributeName = keyWords.join(' ');
      let value = this.props.data[key] === null ? 'N/A' : this.props.data[key];
      if (Array.isArray(value)) {
        value = value.toString().replaceAll(',', ', ');
      }

      return (
        <li className="d-flex flex-wrap justify-content-center text-center" key={key}> 
          <b>{attributeName}:&nbsp;</b> {value}
        </li>
        );
    });

    return (
      <div className="container bg-success rounded-3 my-5 p-4 text-light">
        <h3 className="d-flex flex-row justify-content-center">Parse Results:</h3>
        {parseResultList}
      </div>
    );
  }

  render() {
    return this.getResultList();
  }


}

export default ParseResult;