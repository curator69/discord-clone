import classes from "./Features.module.css";

import invite from "../../assets/invite_only_landing.svg";
import hanging from "../../assets/hanging_out_easy_landing.svg";
import fandom from "../../assets/fandom_landing.svg";

const Features = () => {
  return (
    <div className={classes.main}>
      <div className={classes.feature1}>
        <img src={invite} alt="invite only image" />
        <div className={classes.description}>
          <h2>Create an invite-only place where you belong</h2>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
      <div className={classes.feature2}>
        <img src={hanging} alt="invite only image" />
        <div className={classes.description}>
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
          <h2>Where hanging out is easy</h2>
        </div>
      </div>
      <div className={classes.feature3}>
        <img src={fandom} alt="invite only image" />
        <div className={classes.description}>
          <h2>From few to a fandom</h2>
          <p>
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
