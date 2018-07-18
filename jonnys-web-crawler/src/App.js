import React, { Component } from "react";
import "./App.css";
import UrlInputHandler from "./components/UrlInputHandler";
import * as api from "./components/api";

class App extends Component {
  state = {
    checkedWebsites: {}
  };

  render() {
    return (
      <div>
        <UrlInputHandler />
        <div>
          {Object.keys(this.state.checkedWebsites).length > 0 && (
            <ul>
              {/* {map over the checkedWebsite object} */}
              <li />
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
