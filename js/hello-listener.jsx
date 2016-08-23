// hello-with-state.jsx
import React from 'react';

export default class HelloListener extends React.Component {
  constructor() {
    super();

    this.state = {nameToShow: ""};
  }

  componentWillMount() {
    if (this.props.name === "fucker") {
      this.setState({nameToShow: "bonito"});
    } else {
      this.setState({nameToShow: this.props.name});
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.nameToShow}</h1>
      </div>
    );
  }
}
