import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

import "./styles.css";

function App() {
  const dateFns = Object.getOwnPropertyNames(Date.prototype).filter(
    name => name.startsWith("to") || name.startsWith("get")
  );
  const date = new Date();

  return (
    <div className="App">
      {dateFns.map(fnName => (
        <Card property={`new Date().${fnName}`} result={`${date[fnName]()}`} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
