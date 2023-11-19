import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";


import "../styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();

        const navigate = useNavigate();
      
        const handleSubmit = (e) => {
            e.preventDefault();
        
            axios.get("http://localhost:3000/login", {  email, password })
              .then((result) => {
                if (result.data === "exist") {
                    navigate("/home");
                  
                } else if (result.data === "notexist") {
                    alert("Please Signup first!!");
                }
              })
              .catch((err) => console.log(err));
          };
        
  return (
    
         

   <div className="main">
    <div className="form-div">

    <form onSubmit={handleSubmit} className="login-form">
      <h1>Login</h1>
      
      <div className="form">
      <label htmlFor="">Email</label>
      
      <input className="inp"
        type="text"
        name="username"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="">Password</label>
      
      <input className="inp"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
     
      <button className="btn"  type="submit">Login</button>
      </div>
    </form>
     <p>Don't have an account Click on <Link to="/signup"><b>SignUp</b></Link>?</p>
    </div>
    </div>
  
  



          
  );
  }

export default Login;
