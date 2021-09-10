import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";

function Header({authenticated, logout}) {


  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      {authenticated ? (
        <LogoutButton logout={logout} />
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </header>
  );
}

export default Header;
