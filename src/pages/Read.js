import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function Read() {
  let [user, setUser] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/Students").then((res) => {
      //console.log(res.data)
      setUser(res.data);
    });
    //navigate('/')
  });

  let deleteuser = (sno) => [
    axios.delete("http://localhost:3000/Students/" + sno).then((res) => {
      navigate("/read");
    }),
  ];
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Roll</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {user ? (
          <tbody>
            {user.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.roll}</td>
                  <td>
                    <Link to={"/update/" + item.id}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteuser(item.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <p>No data</p>
        )}
      </table>
    </>
  );
}

export default Read;
