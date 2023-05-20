// Code Keypad Component Here

import React from "react";

function Keypad() {
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => console.log("Entering password")}
      />
    </div>
  );
}

export default Keypad;
