import classes from "./FriendsMain.module.css";

import FriendsNav from "./FriendsNav";
import FriendsAll from "./FriendsAll";
import ActiveNow from "./ActiveNow";
import AddFriend from "./AddFriend";
import { useState } from "react";

const FriendsMain = () => {
  const [active, setActive] = useState(true);
  return (
    <div className={classes.main}>
      <FriendsNav setActive={setActive} />
      <div className={classes.rowFlex}>
        {!active ? <FriendsAll /> : <AddFriend />}
        <ActiveNow />
      </div>
    </div>
  );
};

export default FriendsMain;
