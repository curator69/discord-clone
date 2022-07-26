import classes from "./DashboardMain.module.css";

import Sidebar from "./Sidebar";
import FriendsMain from "./Friends/FriendsMain";

const DashboardMain = () => {
  return (
    <>
      <Sidebar />
      <FriendsMain />
    </>
  );
};

export default DashboardMain;
