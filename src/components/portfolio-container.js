import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    console.log("Protfolio container has rendered");
  }

  render() {
    return (
      <div>
        <h2>Protfoloio items go here...</h2>
      </div>
    );
  }
}
