import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

function MyApp() {
  return (
    <div>
      <h1>custom app| chai</h1>
    </div>
  );
}

// didnot work
// const another = (
//   <a href="" target="_blank">
//     visit google
//   </a>
// );
const user = "chai with coding ";

// creating acc to react js= worked call it as object only not function
const reactElement = React.createElement(
  "a",
  user,
  { href: "https://www.google.com/", target: "_blank" },
  "click me to visit",
);
ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
