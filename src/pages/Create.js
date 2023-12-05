import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  // get (e) automatically when submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please fill the all the fields");
      return;
    }
    const { data, error } = await supabase
      .from("test")
      .insert([{ title, method, rating }]);

    if (error) {
      console.log(error);
      setFormError("Please fill the all the fields");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Method:</label>
        <input
          type="text"
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label>Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create test</button>

        {/* if error, display */}
        {formError && <p className="error"> {formError} </p>}
      </form>
    </div>
  );
};

export default Create;
