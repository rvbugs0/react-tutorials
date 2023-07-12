import React from "react"; // npm install react
import ReactDOM from "react-dom/client"; // npm install react-dom


//this is one way of creating react element.
const heading = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");


const container = React.createElement(
  "div",
  { id: "container" },
  [heading, heading2] //children (more than 1)
);

// creating a root, the scope of react is limited to root.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


//another way of creating a react element - JSX
const heading3 = <h1>This is heading #3</h1>;

// the above is equivalent to React.createElement("h1",{},"This is heading #3")
root.render(heading3);

//if you have code that goes beyond one line
// you can create that element in JSX using following technique
const heading4 = (
  <div>
    <h1>This is heading #4</h1>
  </div>
);

root.render(heading4);

//this means that render() function takes in as argument a React Element.


// FUNCTIONAL COMPONENT - A FUNCTION THAT RETURNS A REACT ELEMENT

const MyHeading = () => (
<div>
    <h1>This is heading #5</h1>
  </div>

)

root.render(MyHeading) //this will not work

//but the following will work. since render() takes in as argument a react element, we will need 
// to call the functional component() which will then return the react element
// which can then be rendered..

root.render(MyHeading());

//another way of calling functional component
root.render(<MyHeading/>)


//we can also use functional component inside a react component
const complexElement = (
<div>
  <h3>This is a complex element</h3>
  <MyHeading/>
</div>
)

root.render(complexElement);


// in the same way, if we don't want to use tags for functional components
// we can use the following

const complexElement2 = (
  <div>
  <h3>This is complex element #2</h3>
  {MyHeading()}
</div>
)

//inside a React element created using JSX, we can put any type of javascript code 
// inside the curly braces. the above code is almost like calling the functional component,
// which will return a react element that will substitue itself in place of {....}

root.render(complexElement2)


//we can also put any JS code within the {}

const complexElement3 = (
  <div>
  <h3>This is complex element #3</h3>
  { "Hello "+"world!"}
</div>
)
root.render(complexElement3)


