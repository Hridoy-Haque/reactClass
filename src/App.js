import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

export default function App() {
  // let items = [];
  // for (let x = 0; x < Data.length; x++) {
  //   items.push(<Card todoTitle={Data[x].title} todoDesc={Data[x].desc} />);
  // }
  // items = Data.map((item) => {
  //   console.log(item);
  //   return <Card todoTitle={item.title} todoDesc={item.desc} />;
  // });
  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      {Data.map((item, key) => (
        <Card key={key} todoTitle={item.title} todoDesc={item.desc} />
      ))}
    </div>
  );
}
