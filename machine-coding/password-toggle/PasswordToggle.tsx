import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

function TogglePassword() {
  const [passVisible, setPassVisible] = useState(false);
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={passVisible ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={() => setPassVisible((prev) => !prev)}
        >
          {passVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        Password {passVisible ? "Visible" : "Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;
