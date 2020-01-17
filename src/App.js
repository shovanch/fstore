/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Header from "components/Header";
import HomePage from "pages/HomePage";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
