import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {GrView} from "react-icons/gr"
import{AiFillEdit} from "react-icons/ai"

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/delete/${id}`);
    loadUsers();
  };

  return (
    <div className="container" style={{marginTop:"60px"
    }}>
      <div className="py-4">
        <table className="table " style={{ boxShadow: "0px 2px 10px rgba(255, 243, 243, 0.907)"}}>
          <thead style={{
            color:"white",
            fontSize:"25px"
          }}
          >
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action <AiFillEdit/></th>
            </tr>
          </thead>
          <tbody style={{
            color:"white",
            fontSize:"20px"
          }}>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                  // className="new-btn"
                  style={{width:"70px"}}
                    className="btn btn-primary mx-2 new-btn"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2 new-btn"
                    style={{
                      background:"transparent"

                    }}
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn mx-2 new-btn"
                    style={{
                      backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
                    color:"white"
                    }}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}