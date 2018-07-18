import React, { Component } from "react";

class UrlInputHandler extends Component {
  state = {
    textBoxInput: ""
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleUrlInput}
          value={this.state.textBoxInput}
        />
        <button
          type="buton"
          onClick={() => this.props.submitUrlToApi(this.state.textBoxInput)}
        >
          Check Links
        </button>
      </div>
    );
  }

  handleUrlInput = event => {
    this.setState({
      textBoxInput: event.target.value
    });
  };
}

export default UrlInputHandler;
