import classes from "./ActiveNow.module.css";

const ActiveNow = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.heading}>Active Now</h1>
      <h4 className={classes.subHeading}>It's quiet for now...</h4>
      <p className={classes.info}>
        When a friend start an activity--like playing a game or hanging out on
        voice--we'll show it here!
      </p>
    </div>
  );
};

export default ActiveNow;
