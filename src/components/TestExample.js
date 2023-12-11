import React from "react";
import { Link } from "react-router-dom";

export default function TestExample({ test }) {
  return (
    <div>
      <h3> {test.title} </h3>
      <p> {test.method} </p>
      <div>{test.rating}</div>
      <Link to={"/" + test.id}>
        <i className="material-icons">edit</i>
      </Link>
      <i>delete</i>
    </div>
  );
}
