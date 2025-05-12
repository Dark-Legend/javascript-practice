import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion({ items }) {
  const [isOpen, setIsOpen] = useState({});
  if (!items.length) {
    return <div>No items available.</div>;
  }
  const handleAccordionOpen = (title) => {
    setIsOpen((prev) => {
      const isCurrentlyOpen = prev[title] === true;

      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      if (!isCurrentlyOpen) {
        newState[title] = true;
      }

      return newState;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.length &&
        items?.map((val) => (
          <div onClick={() => handleAccordionOpen(val.title)}>
            <div
              style={{
                backgroundColor: "lightgray",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                fontWeight: 700,
                fontSize: "24px",
                border: "2px solid gray",
                borderRadius: "10px",
              }}
            >
              {val.title}
              {isOpen[val.title] ? <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
            {isOpen[val.title] && (
              <div
                style={{
                  border: "2px solid gray",
                  borderRadius: "5px",
                  padding: "20px",
                }}
              >
                {val.content}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Accordion;
