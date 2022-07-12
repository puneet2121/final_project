import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../components/App";
import TextLinkExample from "../components/Nav"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <TextLinkExample /> 
      <Route path='/' component={App}/>
    </Router>,
    document.body.appendChild(document.createElement("div")),
  )
})