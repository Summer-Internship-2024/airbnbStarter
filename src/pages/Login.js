import { useState } from "react";
import "../App.css";
import Header from "../components/Header";

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
            <button className="sign-in-button">Sign In</button>
            </div>
      </div>
    </div>
  );
}
