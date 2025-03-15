import React, { useState } from "react";

// Child Component
const Child = ({ sendDataToParent }) => {
  return (
    <button onClick={() => sendDataToParent("Data from Child!")}>
      Click to Send Data
    </button>
  );
};

// Parent Component
const Parent = () => {
  const [childData, setChildData] = useState("");

  return (
    <div>
      <h2>Data from Child: {childData}</h2>
      <Child sendDataToParent={setChildData} />
    </div>
  );
};

export default Parent;
