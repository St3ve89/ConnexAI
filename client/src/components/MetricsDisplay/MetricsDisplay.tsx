import React from "react";
import Loader from "../Loader/Loader";

interface MetricsDisplayProps {
  metrics: string | null;
  loading: boolean;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({
  metrics,
  loading,
}) => {
  return (
    <div style={{ position: "relative" }}>
      {loading && <Loader />}
      {!loading && metrics && (
        <>
          <h2>Metrics</h2>
          <pre>{metrics}</pre>
        </>
      )}
    </div>
  );
};

export default MetricsDisplay;
