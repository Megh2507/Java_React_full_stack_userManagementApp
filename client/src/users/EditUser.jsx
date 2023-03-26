import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import{AiFillEdit} from "react-icons/ai"
export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/update/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container" style={{
      marginTop:"60px"

    }}>
      <div className="row">
        <div className="col-md-6 offset-md-3  rounded p-4 mt-2" style={{
           boxShadow: "0px 2px 10px rgba(255, 243, 243, 0.907)"
        }}>
          <h2 className="text-center m-4" style={{
            color:"white"

          }}
          >Edit User<AiFillEdit/></h2>

          <form onSubmit={(e) => onSubmit(e)} style={{
            color:"white"

          }}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label" id="edit-form">
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