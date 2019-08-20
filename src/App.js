import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from "./Component/SearchBar"

class App extends Component {
  state = {
    user:""
  }

  render() {
    return (
      <div className="App">
        App component
        <SearchBar />
      </div>
    );
  }
}

export default App;
