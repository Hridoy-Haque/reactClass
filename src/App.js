import React, { useEffect, useState } from "react";
export default function App() {
  // const error = true;
  // const style = error
  //   ? { color: "white", fontSize: "20px", backgroundColor: "red" }
  //   : { color: "blue", fontSize: "26px", fontWeight: "600" };
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 4) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className={`${validInput ? "valid" : "inValid"}`}
      />
    </div>
  );
}
// eslint-disable-next-line no-lone-blocks
{
  /* <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ backgroundColor: validInput ? "green" : "red" }} />; */
}
