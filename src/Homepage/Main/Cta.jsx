import classes from "./Cta.module.css";

import justChilling from "../../assets/just_chiling_landing.svg";

const Cta = () => {
  return (
    <div className={classes.main}>
      <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
      <p>
        Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share.
      </p>
      <img src={justChilling} alt="just_chiling_landing" />
      <h3>Ready to start your journey?</h3>
      <a className={classes.btn}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
            <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
          </g>
        </svg>
        Download for Windows
      </a>
    </div>
  );
};

export default Cta;
