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

// ----------------------------

import  { useRef } from 'react'

function Welcome(params) {
    const inputRef = useRef()
    return(
        <>
            <h1>Focus on input field</h1>
            
            <input type="text" ref={inputRef} />
            <input type="button" onClick={()=>inputRef.current.focus()} value="Submit" />    
            
        </>
    )
}


export default Welcome;

