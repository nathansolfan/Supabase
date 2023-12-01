import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Home = () => {
  const [error, setError] = useState(null);
  const [tests, setTests] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from("test").select();

      if (error) {
        setError("Could not fetch data");
        console.log(error);
      }

      if (data) {
        setTests(data);
        setError(null);
      }
    };
    fetch();
  }, []);

  console.log(supabase);
  return (
    <div className="page home">
      {/* DISPLAY ERROR */}
      {error && <p> {error} </p>}

      {/* DISPLAY DATA */}
      {tests && (
        <div className="">
          {tests.map((test) => (
            <p>{test.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
