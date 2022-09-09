import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi(){
  return <div>
    <h1 className="hd">CV</h1>
    <br/>
    <br/>
    <hr/>
    <h2 id="cn">Name: Shariq</h2>
    <br/>
    <b/>
    <hr/>
    <h2 className="edu"><u>Education</u></h2>
    <ul>
      <li>Intermediate</li>
      <li>Web Development &#40;Continue&#41;</li>
    </ul>
    <br/>
    <br/>
    <hr/>
    <h2 className="edu"><u>Contact</u></h2>
    <ul>
      <li>Phone: 03422080316</li>
      <li>Email: www.shariq512000@gmail.com</li>
    </ul>

  </div>
}
ReactDOM.render(<Hi/>, document.querySelector("#root"));