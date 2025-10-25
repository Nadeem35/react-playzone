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
        <ul style={{ textAlign: "left" }}>
          <li>Class Component</li>
          <li>Internal CSS</li>
        </ul>
        <h1 style={nadeem.heading}>I'm class component</h1>
      </>
    );
  }
}

export default Welcome;
