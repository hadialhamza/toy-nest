import axios from "axios";
import { useEffect, useState } from "react";

const useToysData = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../toysData.json")
      .then((data) => setToys(data.data))
      .catch((err) => setError(err))
      .finally(() => {
        setTimeout(() => setLoading(false), 1500);
      });
  }, []);

  return { toys, loading, error };
};

export default useToysData;
