import { useState } from "react";

import classes from "./Navbar.module.css";

import logo from "../../../assets/discord_main_logo.svg";

const Navbar = ({ loggedIn, setLoggedIn, login, setLogin }) => {
  console.log("clicked");

  return (
    <div className={classes.navbar}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.list}>
        <a>Download</a>
        <a>Nitro</a>
        <a>Safety</a>
        <a>Support</a>
        <a>Blogs</a>
        <a>Careers</a>
      </div>
      <a
        className={classes.login_btn}
        onClick={() => {
          setLoggedIn(true);
          setLogin(true);
        }}
      >
        Login
      </a>
    </div>
  );
};

export default Navbar;
