import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleAuth, handleError, handleSuccess } from "../utils/utils";
import { ToastContainer } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const googleResponse = async (authResult) => {
    try {
      if (authResult.code) {
        const result = await googleAuth(authResult["code"]);
        const data = result.data;
        console.log(data);
        if (result.data.success === false) {
          handleError(result.data.message);
        } else {
          localStorage.setItem("jwtToken", data.token);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("picture", data.user.picture);
          localStorage.setItem("isGoogleLogin", data.user.isGoogleLogin);
          handleSuccess(result.data.message);
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      }
    } catch (err) {
      console.log("error while requesting from google ", err);
    }
  };
  //it takes 3 things
  const googleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: googleResponse,
    flow: "auth-code",
    redirectUri: "https://flavour-fusion-frontend.vercel.app",
  });
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email, password is required");
    }
    try {
      const response = await fetch("https://flavour-fusion-new.vercel.app/auth/login",{
        method:"POST",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      console.log(result);
      const { success, message, error, jwtToken, name, email } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        setTimeout(() => {
          navigate("/");
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
      <h1 className="text-4xl font-bold">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
        </div>
        <button type="submit">Login</button>
        <span>
          don't have an account? <Link to="/signup">Signup</Link>{" "}
        </span>
      </form>
      <div className="google">
        <button type="submit" onClick={googleLogin}>
          Signup with google
        </button>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
