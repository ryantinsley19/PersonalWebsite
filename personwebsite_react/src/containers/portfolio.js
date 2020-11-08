import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <TestTitle title="Breakfast" />
        <button onClick={testf}></button>
      </div>
    );
  }
}

function TestTitle(props) {
  return <h1>{props.title}</h1>;
}

const testf = () => {};
