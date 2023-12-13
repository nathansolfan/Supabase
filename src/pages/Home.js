import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

// components
import TestExample from "../components/TestExample";

const Home = () => {
  const [fetcherror, fetchSetError] = useState(null);
  const [tests, setTests] = useState(null);

  // handleDelete function to update the state
  const handleDelete = () => {};

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from("test").select();

      if (error) {
        fetchSetError("Could not fetch data");
        setTests(null);
        console.log(error);
      }

      if (data) {
        setTests(data);
        fetchSetError(null);
      }
    };
    fetch();
  }, []);

  return (
    <div className="page home">
      {/* DISPLAY ERROR */}
      {fetcherror && <p>{fetcherror}</p>}

      {/* DISPLAY DATA */}
      {tests && (
        <div className="test">
          {tests.map((test) => (
            // <p>{test.title}</p>
            <TestExample key={test.id} test={test} />
            // min 14 video nr3
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
