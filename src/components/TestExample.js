import React from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

// accept onDelete as prop
export default function TestExample({ test, onDelete }) {
  const handleDelete = async () => {
    const [data, error] = await supabase
      .from("test")
      .delete()
      .eq("id", test.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(test.id);
    }
  };

  return (
    <div>
      <h3> {test.title} </h3>
      <p> {test.method} </p>
      <div>{test.rating}</div>
      <div className="buttons">
        <Link to={"/" + test.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
}
