import { useState, useEffect } from "react";
import "./styles.css";

const ProgessBar = ({ progress }) => {
  const [progressAnimation, setProgressAnimation] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgressAnimation(progress), 100);
  }, [progress]);

  return (
    <div className="container">
      <div
        className="progress"
        style={{ transform: `translateX(${progressAnimation - 100}%)` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [5, 10, 20, 40, 50, 70.8];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((val) => (
        <ProgessBar progress={val} />
      ))}
    </div>
  );
}
