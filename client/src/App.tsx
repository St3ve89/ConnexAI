import React from "react";
import useServerData from "./hooks/useServerData";
import TimeDisplay from "./components/TimeDisplay/TimeDisplay";
import MetricsDisplay from "./components/MetricsDisplay/MetricsDisplay";
import styles from "./App.module.css";

const App: React.FC = () => {
  const { serverTime, metrics, loading, error } = useServerData();

  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.half}>
        <TimeDisplay
          serverTime={serverTime ? serverTime.epoch : null}
          loading={loading}
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.half}>
        <MetricsDisplay metrics={metrics} loading={loading} />
      </div>
    </div>
  );
};

export default App;
