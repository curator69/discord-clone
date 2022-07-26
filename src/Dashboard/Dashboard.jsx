import { useState } from "react";
import classes from "./Dashboard.module.css";

import DashboardMain from "./DashboardMain";
import Server1 from "./Server1";
import ServerNav from "./ServerNav";

const Dashboard = () => {
  const [serverClicked, setServerClicked] = useState(false);

  return (
    <div className={classes.main}>
      <ServerNav setServerClicked={setServerClicked} />
      {serverClicked ? <Server1 /> : <DashboardMain />}
    </div>
  );
};

export default Dashboard;
