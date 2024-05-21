import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import App from "../App";

export default function Login() {
  return (
    <div className="App">
      <Header />
      <div className="Home">
        <h1 className="sign-in-title">Sign in:</h1>
            <div className="input-bar">
            Email
            <input className="email-sign-in-input"></input>
            </div>
            <div className="input-bar">
            Password
            <input className="password-sign-in-input"></input>
            </div>
            <div className="button-div">
            <button className="sign-in-button" onClick={LoginButton}>Sign In</button>
            </div>
      </div>
    </div>
  );
}

async function LoginButton()
{
  var email =  document.querySelector(".email-sign-in-input").value;
  var password = document.querySelector(".password-sign-in-input").value;

  var query = `SELECT account_id FROM project.Account WHERE email = '${email}' AND password = '${password}';`;
  var encoded = encodeURIComponent(query);
  var responseData
  var url = `http://localhost:3005/sql?data=${encoded}`
  await fetch(url)
    .then((response) => response.json())
    .then((json) => responseData = json)
  console.log(responseData);
  if (responseData.length == 0)
  {
    alert("Invalid login credentials");
    return
  }
  App.account_id = responseData[0].account_id;
  return;
}
