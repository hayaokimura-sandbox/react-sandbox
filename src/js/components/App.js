import React from "react";
import ReactDOM from "react-dom";

export const App = () => {
  return <div>my first commit.</div>;
};

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
