import classes from "./Login.module.css";

import qrcode from "../assets/qr_code.png";
import Dashboard from "../Dashboard/Dashboard";

const Login = ({
  loggedIn,
  setLoggedIn,
  login,
  setLogin,
  setFullyLoggedIn,
}) => {
  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <h4 className={classes.form_heading}>Welcome Back!</h4>
        <p className={classes.form_subHeading}>
          We're so excited to see you again!
        </p>

        <form action="#">
          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" id="password" />
          <a href="#">Forgot your password?</a>
          <button onClick={() => setFullyLoggedIn(true)}>Login</button>
          <p>
            Need an account?{" "}
            <a
              href="#"
              onClick={() => {
                setLogin(false);
              }}
            >
              Register
            </a>
          </p>
        </form>
      </div>
      <div className={classes.qrcode}>
        <img className={classes.qrcodeImage} src={qrcode} alt="qrcode" />
        <h4 className={classes.qrcode_heading}>Log in with QR Code</h4>
        <p className={classes.qrcode_subHeading}>
          Scan this with the <strong>Discord mobile app</strong> to log in
          instantly
        </p>
      </div>
    </div>
  );
};

export default Login;
