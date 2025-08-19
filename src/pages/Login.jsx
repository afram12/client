import React, { useState } from 'react'
import {
    Link,
    useNavigate
}from "react-router-dom"
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();     //isse page refress nhi hota



        try {
            const res= await API.post("/login", {email, password});

            if(res.data.message == "Login successful"){
                //user data to localhost me store karein 
                localStorage.setItem ("user",JSON.stringify(res.data));

                alert("Login successful !");
                navigate("/");
            } else {
                alert (res.data.message || "login failed");
            }
        }catch (error){
                console.error(error);
                alert("something went wrong!");
            }
        }

        return (
    <div className="container mt-5" style={{ maxWidth: "500px"}}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email address</label>
          <input 
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="mb-3">
          <label >Password</label>
          <input 
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );

    }
  


export default Login
