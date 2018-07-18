import React, { Component } from "react";
import "./App.css";
import UrlInputHandler from "./components/UrlInputHandler";
import * as api from "./components/api";
import WebLinksDisplayHandler from "./components/WebLinksDisplayHandler";

class App extends Component {
  state = {
    checkedWebsites: {}
  };

  render() {
    return (
      <div>
        <UrlInputHandler submitUrlToApi={this.submitUrlToApi} />
        <div>
          {Object.keys(this.state.checkedWebsites).length > 0 && (
            <WebLinksDisplayHandler
              checkedWebsites={this.state.checkedWebsites}
            />
          )}
        </div>
      </div>
    );
  }
  submitUrlToApi = urlToCheck => {
    api.checkWebsiteLinks(urlToCheck).then(urlObj => {
      this.setState({
        checkedWebsites: urlObj
      });
    });
  };
}

export default App;
