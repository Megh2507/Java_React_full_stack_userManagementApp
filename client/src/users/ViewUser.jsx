import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import {TiArrowBack} from "react-icons/ti"
import {FaUserTie} from "react-icons/fa"
import {MdPermIdentity,MdEmail} from "react-icons/md"
import {BiCommentDetail} from "react-icons/bi"
export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container" style={{
      marginTop:"60px"

    }}>
      <div className="row">
        <div className="col-md-6 offset-md-3  rounded p-4 mt-2"style={{
           boxShadow: "0px 2px 10px rgba(255, 243, 243, 0.907)"
        }}>
          <h2 className="text-center m-4" style={{
            color:"white"

          }}
          >User Details <BiCommentDetail/></h2>

          <div className="card" style={{
            color:"white"

          }}>
            {/* <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush" style={{
                background:"transparent"
              }}>
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div> */}
          </div>
          <div className=""
          style={{
            // border:"1px solid red",
          // height:"20vh",
          width:"100%",


          marginTop:"30px",
          borderRadius:"30px",
          backgroundColor: "#005bea",
          
          // border: 1px solid black;
          opacity: "0.5",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          gap:"15px",
          color:"white",
          padding:"30px",
          fontSize:"20px"




          }}
          >
            <p><FaUserTie size={22}/> <b>Name : </b>{user.name}</p>
            <p><MdPermIdentity size={22}/><b> User Name : </b>{user.username}</p>
            <p><MdEmail size={22}/><b> Email : </b>{user.email}</p>
          </div>
          <Link className="new-btn" style={{marginRight:"20px",width:"22%",marginTop:"20px"
  }} to="/"><p style={{marginBottom:"-2px"}}>Go Back</p><TiArrowBack size={20} color="white"/></Link>
        </div>
      </div>
    </div>
  );
}