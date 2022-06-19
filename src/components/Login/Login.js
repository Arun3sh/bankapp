import "./Login.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./../../App";
import { useState } from "react";
import { API } from "./../../assets/global";
import { toast } from "react-toastify";

toast.configure();

function Login() {
  const history = useHistory();
  const { setLogin, setIsAdmin } = useContext(authContext);
  const [acc, setAcc] = useState(null);
  const [password, setPassword] = useState(null);

  const checkUser = async () => {
    await fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        acc,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((userToken) => {
        if (acc === "0000") {
          setIsAdmin(true);
        }
        toast.success("Loged in");
        history.push("/");

        localStorage.setItem("token", userToken.token);
        localStorage.setItem("userId", userToken.id);
        setLogin(true);
      })
      .catch(() => {
        toast.error("Invalid login attempt");
      });
  };

  return (
    <div className="container-sm login">
      <div className="logo-title">
        <h2>BankApp</h2>
        <p>Banking made simple!</p>
      </div>
      <div className="login-wrapper">
        {/* Login Container */}
        <div className="row-login">
          <div className="login-heading">
            <h2>Login</h2>
          </div>
          <div className="acc-container">
            <TextField
              id="acc"
              name="acc"
              autoComplete="off"
              autoFocus={true}
              variant="outlined"
              className="acc-textfield"
              label="Account No"
              onChange={(e) => setAcc(e.target.value)}
            />
          </div>
          <div className="password-container">
            <TextField
              id="password"
              name="password"
              variant="outlined"
              className="password-textfield"
              type="password"
              label="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && checkUser()}
            />
          </div>
          <div className="login-btn-container">
            <div className="forgot-password">
              <Link to="/get-demo-id" aria-label="forgot password">
                Get Demo User ID here
              </Link>
            </div>

            <Button variant="outlined" onClick={checkUser}>
              LOGIN
            </Button>
            <div className="register-yet">
              Don't have an Account Yet? Click{" "}
              <Link to="/create-account" aria-label="not registered">
                here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
