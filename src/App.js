import React from "react";

const users = [
  {
    fullName: "Hridoy Haque",
    age: 21,
    phones: [{ home: "0183627782" }, { office: "01836278789" }],
  },
  {
    fullName: "Anik Ahmed",
    age: 15,
    phones: [{ home: "0183627766" }, { office: "01836278765" }],
  },
  {
    fullName: "Nirob Ahmed",
    age: 32,
    phones: [{ home: "01836277890" }, { office: "0183627879" }],
  },
];

export default function App() {
  return (
    <div>
      <h1>Nested List</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>{phone.home}</p>
              <p>{phone.office}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
