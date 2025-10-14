import { Component } from "react";

const nadeem = {
  heading: {
    color: "red",
    textAlign: "center",
  },
};

class Welcome extends Component {
  render() {
    return (
      <>
        <h1 style={nadeem.heading}>I'm class component</h1>
      </>
    );
  }
}

export default Welcome;
