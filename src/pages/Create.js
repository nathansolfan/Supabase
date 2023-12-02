import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState("");

  return (
    <div className="page create">
      <form action="">
        <label>Title:</label>
        <input
          type="text"
          id="method"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Create;
