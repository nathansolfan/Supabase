import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTest = async () => {
      const { data, error } = supabase
        .from("test")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
      }
    };
  });

  return (
    <div className="page update">
      <h2>Update - {id}</h2>
    </div>
  );
};

export default Update;
