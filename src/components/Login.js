import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [error, setErrro] = useState("");
  const handlUiChange = (v) => {
    setEmail("");
    setPassword("");
    setCpassword("");
    setLogin(v);
    setErrro("");
  };
  const loginUser = () => {
    const usere = localStorage.getItem("useremail");
    const userp = localStorage.getItem("userpass");
    if (email == usere && userp == password) {
      localStorage.setItem("userlogin", true);
      setErrro("");
      navigate("/");
    } else {
      setErrro("user or password incorrect");
    }
  };
  const signup = () => {
    if (email.length == 0 && password.length == 0) {
      setErrro("Please fill the register form");
    } else if (email.length == 0) {
      setErrro("Please enter an email");
    } else if (password.length == 0 && email.length != 0) {
      setErrro("Please enter password");
    } else if (password != cPassword) {
      setErrro("password not match");
    } else {
      setErrro("");
      localStorage.setItem("useremail", email);
      localStorage.setItem("userpass", password);
      alert("Register Successful");
    }
  };
  return (
    <div>
      {isLogin ? (
        <div className="wrapper">
          <form method="post">
            <h2>Login</h2>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Password">Password</label>
              <input
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />
            </div>
            <h5>{error}</h5>

            <div>
              <button
                className="book"
                onClick={(e) => {
                  e.preventDefault();
                  loginUser();
                }}
              >
                Login
              </button>
            </div>
            <div className="signup-link">
              <p>Not a member?</p>
              <a href="#" onClick={(e) => handlUiChange(false)}>
                Register
              </a>
            </div>
          </form>{" "}
        </div>
      ) : (
        <div className="wrapper">
          <form method="post">
            <h2>Register</h2>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Password">Password</label>
              <input
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="cPassword">Confirm Password</label>
              <input
                name="cPassword"
                required
                value={cPassword}
                onChange={(e) => setCpassword(e.target.value)}
                type="password"
              />
            </div>
            <div>
              <button
                className="book"
                onClick={(e) => {
                  e.preventDefault();
                  signup();
                }}
              >
                Register
              </button>
            </div>
            <h5>{error}</h5>
            <div className="signup-link">
              <a href="#" onClick={() => handlUiChange(true)}>
                Go to login
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
