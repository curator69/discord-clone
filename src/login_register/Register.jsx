import classes from "./Register.module.css";

const Register = ({
  loggedIn,
  setLoggedIn,
  login,
  setLogin,
  setFullyLoggedIn,
}) => {
  return (
    <div className={classes.main}>
      <h4 className={classes.heading}>Create an account</h4>
      <form action="#">
        <label htmlFor="email">EMAIL</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="username">USERNAME</label>
        <input type="username" name="username" id="username" />
        <label htmlFor="password">PASSWORD</label>
        <input type="password" name="password" id="password" />
        <button onClick={() => setFullyLoggedIn(true)}>Continue</button>
        <a
          href="#"
          onClick={() => {
            setLogin(true);
          }}
        >
          Already have an account?
        </a>
      </form>
    </div>
  );
};

export default Register;
