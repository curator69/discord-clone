import React, { Fragment, useState } from "react";

import Homepage from "./Homepage/Homepage";
import Login from "./login_register/Login";
import Card from "./login_register/Card";
import Register from "./login_register/Register";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState(false);
  const [fullyLoggedIn, setFullyLoggedIn] = useState(false);

  return (
    <Fragment>
      {!loggedIn && !fullyLoggedIn && (
        <Homepage
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          login={login}
          setLogin={setLogin}
          fullyLoggedIn={fullyLoggedIn}
          setFullyLoggedIn={setFullyLoggedIn}
        />
      )}
      {loggedIn && login && !fullyLoggedIn && (
        <Card>
          <Login
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            login={login}
            setLogin={setLogin}
            fullyLoggedIn={fullyLoggedIn}
            setFullyLoggedIn={setFullyLoggedIn}
          />
        </Card>
      )}
      {loggedIn && !login && !fullyLoggedIn && (
        <Card>
          <Register
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            login={login}
            setLogin={setLogin}
            fullyLoggedIn={fullyLoggedIn}
            setFullyLoggedIn={setFullyLoggedIn}
          />
        </Card>
      )}
      {/* <Dashboard /> */}
      {fullyLoggedIn && <Dashboard />}
    </Fragment>
  );
}

export default App;
