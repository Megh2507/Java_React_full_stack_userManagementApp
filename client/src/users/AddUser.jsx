import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {CgEnter} from "react-icons/cg"
export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container" style={{
      marginTop:"60px"

    }}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4" style={{
            color:"white"

          }}>Register User<CgEnter/></h2>

          <form onSubmit={(e) => onSubmit(e)} style={{
            color:"white"

          }}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
               style={{
                background:"transparent",
                borderRadius:"20px",
                color:"white",
                border:"none",
                boxShadow: "0px 2px 10px rgba(255, 243, 243, 0.907)"

              }}
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
               style={{
                background:"transparent",
                borderRadius:"20px",
                color:"white",
                border:"none",
                boxShadow: "0px 2px 10px rgba(255, 243, 243, 0.907)"

              }}
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
               style={{
                background:"transparent",
                borderRadius:"20px",
                color:"white",
                border:"none",
                boxShadow: "0px 2px 10px rgba(255, 243, 243, 0.907)"

              }}
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}