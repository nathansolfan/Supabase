import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Home = () => {
  const [error, setError] = useState(null);
  const [test, setTest] = useState(null);

  useEffect(() => {});

  console.log(supabase);
  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
