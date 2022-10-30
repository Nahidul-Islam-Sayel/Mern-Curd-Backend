import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../App";
import logo from "../image/Logo.jpg";
import "./Nevbar.css";
const Nevbar = () => {
  const[login,setLogin,docLogin, setDocLogin]= useContext(userContext);
console.log(login)

  const logout = () => {
    setDocLogin(0);
    setLogin(0);
    console.log(login);
    sessionStorage.clear();
  };
  return (
    <div>
      <nav class="navbar navbar-light bg-primary navbar-logosite">
        <a class="navbar-brand text-white nav-logo" href="#">
          <img src={logo} className="navlogo" alt="" />
        </a>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse container" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to="/" exact className="nav-link text-light">
                Home
              </NavLink>
            </li>
            {(sessionStorage.getItem("username")||  login === 1) && (
            <li class="nav-item">
              <NavLink to="/uploadFile" className="nav-link text-light">
                Upload File
              </NavLink>
           
            </li>
               )
              }
            {(sessionStorage.getItem("username")||  login === 1) ? (
              <>
                {" "}
                <li class="nav-item">
                  <NavLink to="/profile" className="nav-link text-light">
                    Profile
                  </NavLink>
                </li>
                <li
                  class="nav-item"
                  onClick={logout}
                >
                  <NavLink to="/" className="nav-link text-light">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : ((sessionStorage.getItem("Doclogin")||  docLogin === 1) ?( <>
              {" "}
              <li class="nav-item">
                <NavLink to="/profileDoc" className="nav-link text-light">
                  Profile
                </NavLink>
              </li>
              <li
                class="nav-item"
                onClick={logout}
              >
                <NavLink to="/" className="nav-link text-light">
                  Logout
                </NavLink>
              </li>
            </>) :(
              <li className="nav-item dropdown">
                <a  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">
                    <Link to="signup">Sing Up</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="login">Login</Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nevbar;
