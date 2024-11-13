import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

interface ServerTime {
  epoch: number;
}

const useServerData = () => {
  const [serverTime, setServerTime] = useState<ServerTime | null>(null);
  const [metrics, setMetrics] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServerTime = async () => {
    try {
      const response = await fetch(`${API_URL}/time`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      if (!response.ok) throw new Error("Failed to fetch server time");
      const data: ServerTime = await response.json();
      setServerTime(data);
    } catch (err) {
      setError("Failed to fetch server time");
    }
  };

  const fetchMetrics = async () => {
    try {
      const response = await fetch(`${API_URL}/metrics`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      if (!response.ok) throw new Error("Failed to fetch metrics");
      const data = await response.text();
      setMetrics(data);
    } catch (err) {
      setError("Failed to fetch metrics");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchServerTime();
      await fetchMetrics();
      setLoading(false);
    };

    fetchData();

    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { serverTime, metrics, loading, error };
};

export default useServerData;
