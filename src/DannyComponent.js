import React, { Component } from "react";

class DannyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Danny"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} </h1>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default DannyComponent;
