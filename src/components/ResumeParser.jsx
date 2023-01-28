import React, { Component } from 'react';
import FileInput from './FileInput';
import ParseResult from './ParseResult';

class ResumeParser extends Component {
  state = {
    file: null,
    data: null
  }

  handleUploadStart = async (event) => {
    event.preventDefault()
    this.setState({ data: "Loading..." });
    const formData = new FormData();
    formData.append('file', this.state.file);
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      this.setState({ data: data });
    } catch (error) {
      console.error(error);
    }
  };

  handleFileChanged = (event) => {
    this.setState({ file: event.target.files[0] });
  }


  render() {
    return (
      <div>
        <FileInput onUpload={this.handleUploadStart} onFileChanged={this.handleFileChanged} file={this.state.file}/>
        <ParseResult data={this.state.data}/>
      </div>
    );
  }
}

export default ResumeParser;