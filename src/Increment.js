import "./style.css";
import * as React from "react";

export const Increment = ({ steps = 1 }) => {
  const [count, setSteps] = React.useState(0);

  return (
    <div className="border">
      <h1>{count}</h1>
      <button className="myButton" onClick={() => setSteps(count + steps)}>
         Increase
      </button>
    </div>
  );
};
