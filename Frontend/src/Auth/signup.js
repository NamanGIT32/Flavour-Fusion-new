import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/utils";
import { ToastContainer } from "react-toastify";
import api from "../../axios";

const Signup = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("name, email, password is required");
    }
    try {
      const response = await api.post("/auth/signup", signupInfo); // Using the Axios instance
      const result = response.data; // Axios automatically parses JSON
      console.log(result);
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        handleError(error.details[0].message);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <div className="outer-container">
      <div className="container">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              autoFocus
              placeholder="enter your name"
              value={signupInfo.name}
              onChange={(e) =>
                setSignupInfo({ ...signupInfo, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="enter your email"
              value={signupInfo.email}
              onChange={(e) =>
                setSignupInfo({ ...signupInfo, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="enter your password"
              value={signupInfo.password}
              onChange={(e) =>
                setSignupInfo({ ...signupInfo, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="py-1 px-3 ">
            Sign Up
          </button>
          <span>
            already have an account? <Link to="/login">Login</Link>{" "}
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
