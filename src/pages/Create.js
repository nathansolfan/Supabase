import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState("");

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
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create test</button>
      </form>
    </div>
  );
};

export default Create;
