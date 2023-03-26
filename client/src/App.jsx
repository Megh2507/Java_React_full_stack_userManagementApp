import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './component/Navbar'
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import ViewUser from './users/ViewUser'
import Home from './pages/Home'

function App() {
  const [user, setUser] = useState([])
  useEffect(()=> {
    getUsers();
  },[])
const  getUsers = async () => {
    const res =await axios.get("http://localhost:8080/users")
    console.log(res.data)

  }


  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
        </Router>
    </div>
  
  );
}

export default App
