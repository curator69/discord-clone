import classes from "./Card.module.css";

import discordLogo from "../assets/discord_main_logo.svg";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.discordLogo}
        src={discordLogo}
        alt="discordLogo"
      />
      <div className={classes.background}>{props.children}</div>
    </div>
  );
};

export default Card;
