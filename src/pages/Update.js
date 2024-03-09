import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function Update() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [email, setEmail] = useState();
  let [roll, setRoll] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/Students/" + id).then((res) => {
      // console.log(res.data);
      setName(res.data.name);
      setAge(res.data.age);
      setEmail(res.data.email);
      setRoll(res.data.roll);
    });
  }, [id]);

  let updateUser = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/Students/" + id, {
        name,
        age,
        email,
        roll,
      })
      .then((res) => {
        navigate("/read");
      });
  };
  return (
    <>
      <form onSubmit={updateUser}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            placeholder="Enter age"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Roll</label>
          <input
            type="number"
            name="roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            className="form-control"
            placeholder="Enter roll"
          />
        </div>
        <div className="mb-3 col-1">
          <input
            type="Submit"
            name="sub"
            className="form-control bg-danger"
            value="Update"
          />
        </div>
      </form>
    </>
  );
}

export default Update;
