import React, { useState } from "react";
import "./styles.css";
function ChipsInput() {
  const [chipList, setChipList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addChipHandler = (event) => {
    if (event.code === "Enter" && event.target.value.trim()) {
      setChipList((prev) => [
        ...prev,
        {
          title: event.target.value,
          id: Date.now(),
        },
      ]);
      setInputValue("");
    }
  };

  const onDeleteHandler = (id) => {
    const updatedChipList = chipList?.filter((val) => val?.id !== id);

    setChipList(updatedChipList);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onKeyDown={addChipHandler}
        onChange={handleInput}
      />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {Boolean(chipList?.length) &&
          chipList?.map((chip) => (
            <div
              style={{
                backgroundColor: "lightGray",
                minWidth: "100px",
                maxWidth: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px",
                borderRadius: "50px",
              }}
              key={chip.id}
            >
              <span>{chip.title}</span>
              <button
                onClick={() => onDeleteHandler(chip.id)}
                style={{
                  color: "red",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChipsInput;
