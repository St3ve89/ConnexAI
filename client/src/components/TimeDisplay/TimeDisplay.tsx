import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

interface TimeDisplayProps {
  serverTime: number | null;
  loading: boolean;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ serverTime, loading }) => {
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    if (serverTime) {
      const updateDifference = () => {
        const clientTime = Math.floor(Date.now() / 1000);
        setTimeDifference(clientTime - serverTime);
      };

      updateDifference();
      const interval = setInterval(updateDifference, 1000);

      return () => clearInterval(interval);
    }
  }, [serverTime]);

  return (
    <div style={{ position: "relative" }}>
      {loading && <Loader />}
      {!loading && serverTime !== null && (
        <>
          <h2>Server Time</h2>
          <p>Epoch: {serverTime}</p>
          <p>
            Time Difference:{" "}
            {new Date(timeDifference * 1000).toISOString().slice(11, 19)}
          </p>
        </>
      )}
    </div>
  );
};

export default TimeDisplay;
