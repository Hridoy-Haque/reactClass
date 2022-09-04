import React from "react";
import { v4 as uuid } from "uuid";

const todos = [
  {
    id: uuid(),
    title: "todo1",
    desc: "todo1 description 1",
  },
  {
    id: uuid(),
    title: "todo2",
    desc: "todo1 description 1",
  },
  {
    id: uuid(),
    title: "todo3",
    desc: "todo1 description 1",
  },
];

const List = () => {
  console.log(uuid());
  return (
    <div>
      {todos.map((todo) => {
        const { id, title, desc } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
