import axios from "axios";
import React, { useState } from "react";

function LogIn(props) {
  const [query, setQuery] = useState("");
  const [password, setPassword] = useState("");

  const getOneUser = (query, password) => {
    axios.post("/bank/logIn",{
        query:query,password:password
    }).then(res=>{
      if(res.data._doc.firstName){
        console.log(JSON.stringify(res.data.accessToken))
        let x=JSON.stringify(res.data.accessToken)
       localStorage.setItem("accessToken",x)
      props.setUser(res.data._doc)
      props.setNavView("logged")
      props.setView("dashboard")}
      else{
        alert(res.data)
      }
        }).catch(err=>console.log(err))
  };
  return (
    <div className="inscription">
    <div className="login-box">
      
      <form className="login">
      <h1>LogIn</h1>
      <h2>Phone number or email</h2>
        <input
          type="text"
          placeholder="email or phoneNumber"
          onChange={(e) => setQuery(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button"  onClick={() => getOneUser(query, password)}>
          logIn
        </button>
      </form>
    </div>
    </div>
  );
}

export default LogIn;
