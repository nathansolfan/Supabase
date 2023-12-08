import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const fetchTest = async () => {
      const { data, error } = await supabase
        .from("test")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
        console.log(data);
      }
    };
    fetchTest();
    // remember to declare those
  }, [id, navigate]);

  return (
    <div className="page update">
      <form action=""></form>
    </div>
  );
};

export default Update;
