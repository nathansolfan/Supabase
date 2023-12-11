import React from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

export default function TestExample({ test }) {
  const handleDelete = async () => {
    const [] = await supabase;
  };

  return (
    <div>
      <h3> {test.title} </h3>
      <p> {test.method} </p>
      <div>{test.rating}</div>
      <Link to={"/" + test.id}>
        <i className="material-icons">edit</i>
      </Link>
      <i onClick={handleDelete}>delete</i>
    </div>
  );
}
