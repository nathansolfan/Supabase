import React from "react";

export default function TestExample({ test }) {
  return (
    <div>
      <h3> {test.title} </h3>
      <p> {test.method} </p>
      <p> {test.rating} </p>
    </div>
  );
}
