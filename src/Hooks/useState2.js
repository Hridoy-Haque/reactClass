import React, { useState } from "react";

export default function UseState2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count : {count}</h1>
      <button className="btnClass" onClick={setCount(() => count + 1)}>
        Increament
      </button>
    </div>
  );
}
