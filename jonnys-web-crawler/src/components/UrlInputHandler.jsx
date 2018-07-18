import React, { Component } from "react";

class UrlInputHandler extends Component {
  state = {
    textBoxInput: ""
  };

  render() {
    console.log(this.state.textBoxInput);
    return (
      <form>
        <input
          type="text"
          onChange={this.handleUrlInput}
          value={this.state.textBoxInput}
        />
        {/* make get request with the url given as a parameter */}
        <button>Check Links</button>
      </form>
    );
  }

  handleUrlInput = event => {
    this.setState({
      textBoxInput: event.target.value
    });
  };
}

export default UrlInputHandler;
