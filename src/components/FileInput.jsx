import React, { Component } from 'react';

class FileInput extends Component {


  constructor(props) {
    super(props);
    this.inputReference = React.createRef();
  }

  getFileName() {
    if (this.props.file == null) {
      return "No File Selected";
    } else {
      return this.props.file.name;
    }
  }

  getUploadBtn() {
      return(
        this.props.file != null &&
        <button className="btn btn-warning rounded-4" type="submit" onClick={this.props.onUpload}>
          Upload
        </button>
      );
  }

  render() {
    return (
      <div className="container my-5">
        <div className="d-flex flex-row justify-content-center m-3">
          <button className="btn btn-primary rounded-4" onClick={() => this.inputReference.current.click()}>
            <p>Select Resume PDF File:</p>
            <p>{this.getFileName()}</p>
            <input hidden ref={this.inputReference} id="file-upload" type="file" onChange={this.props.onFileChanged} accept="application/pdf" />
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center m-3">
          {this.getUploadBtn()}
        </div>
      </div>
    );
  }
}

export default FileInput;