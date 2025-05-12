import React, { useState } from "react";

function ProgressBar() {
  const [barProgress, setBarProgress] = useState(0);

  const handleIncrementDecrement = (type) => {
    if (type === "decrement" && barProgress !== 0) {
      setBarProgress((prev) => prev - 10);
    }
    if (type === "increment" && barProgress !== 100) {
      setBarProgress((prev) => prev + 10);
    }
  };

  const generateColor = (value) => {
    if (value < 40) {
      return "red";
    }
    if (value >= 40 && value < 80) {
      return "orange";
    }
    if (value >= 80) return "green";
  };
  return (
    <div>
      {/* Implement the ProgressBar component logic here */}
      <div
        style={{
          height: "30px",
          borderRadius: 12,
          backgroundColor: "lightGray",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "8px",
            fontSize: 15,
            color: "white",
          }}
        >
          {" "}
          {barProgress}%
        </div>
        <div
          id="testBgColor"
          style={{
            backgroundColor: generateColor(barProgress),
            width: `${barProgress <= 100 ? barProgress : 100}%`,
            height: "30px",
            borderRadius: 12,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: 20,
            transition: "ease-in 0.2s",
          }}
        ></div>
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => handleIncrementDecrement("decrement")}
          type="button"
        >
          -10%
        </button>
        <button
          onClick={() => handleIncrementDecrement("increment")}
          type="button"
        >
          +10%
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
