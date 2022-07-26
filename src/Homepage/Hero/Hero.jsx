import classes from "./Hero.module.css";

import Navbar from "./Navbar/Navbar";

import left_bg_landing_header from "../../assets/left_bg_landing_header.svg";
import right_bg_landing_header from "../../assets/right_bg_landing_header.svg";

const Hero = ({ loggedIn, setLoggedIn, login, setLogin }) => {
  return (
    <div className={classes.hero}>
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        login={login}
        setLogin={setLogin}
      />
      <div className={classes.main}>
        <h1 className={classes.heading}>IMAGINE A PLACE...</h1>
        <p className={classes.info}>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className={classes.buttons}>
          <a className={classes.btn1}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            Download for Windows
          </a>
          <a className={classes.btn2}>Open Discord in your browser</a>
        </div>
      </div>
      <img
        className={classes.img1}
        src={left_bg_landing_header}
        alt="right_bg_landing_header"
      />
      <img
        className={classes.img2}
        src={right_bg_landing_header}
        alt="right_bg_landing_header"
      />
    </div>
  );
};

export default Hero;
