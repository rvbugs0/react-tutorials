// npm install react
import React from "react";

// npm install react-dom
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");

const container = React.createElement(
  "div",
  { id: "container" },
  [heading, heading2] //children (more than 1)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
