import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

// components
import TestExample from "../components/TestExample";

const Home = () => {
  const [fetcherror, fetchSetError] = useState(null);
  const [tests, setTests] = useState(null);

  // order by
  const [orderBy, setOrderBy] = useState("created_at");

  // handleDelete function to update the state
  // takes ID as argument
  // setTest( prevID => {}) fires a function

  const handleDelete = (id) => {
    setTests((prevTests) => {
      return prevTests.filter((tst) => tst.id !== id);
    });
  };

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
            <TestExample
              key={test.id}
              test={test}
              // add prop equal to the func created
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
