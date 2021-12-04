import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export function Users() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          console.warn("Result ", result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((err) => {
        //this catch block came in offline mode
        console.log("In catch Block");
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        setMode("offline");
      });
  }, []);

  return (
    <div>
      <h1>Users Component </h1>
      <div>
        {mode === "offline" ? (
          <div className="alert alert-warning" role="alert">
            You are in Offline Mode or Some issue with Connection
          </div>
        ) : null}
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={Math.random()}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
