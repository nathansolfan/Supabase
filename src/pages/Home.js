import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Home = () => {
  const [error, setError] = useState(null);
  const [test, setTest] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from("test").select();

      if (error) {
        setError("Could not fetch data");
        console.log(error);
      }

      if (data) {
        setTest(data);
        setError(null);
      }
    };
  });

  console.log(supabase);
  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
