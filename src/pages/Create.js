import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
function Create() {
  let navigate = useNavigate();
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [email, setEmail] = useState();
  let [roll, setRoll] = useState();

  let submitUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Students", {
        name,
        age,
        email,
        roll,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/read");
      });
  };
  return (
    <>
      <div className="mx-auto col-5 m-5 data p-3">
        <form onSubmit={submitUser}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="Enter age"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll</label>
            <input
              type="number"
              name="roll"
              className="form-control"
              onChange={(e) => {
                setRoll(e.target.value);
              }}
              placeholder="Enter roll"
            />
          </div>
          <div className="mb-3 ">
            <input
              type="Submit"
              name="sub"
              className="form-control bg-danger"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
