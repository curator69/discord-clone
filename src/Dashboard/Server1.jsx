import classes from "./Server1.module.css";

const hashtag = (
  <svg className={classes.hashtag} width="18" height="18" viewBox="0 0 24 24">
    <path
      fill="grey"
      d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
    ></path>
  </svg>
);

const arrorDown = (
  <svg className={classes.arrorDown} width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="grey"
      d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
    ></path>
  </svg>
);

const plusIcon = (
  <svg
    className={classes.plusIcon}
    x="0"
    y="0"
    aria-hidden="false"
    viewBox="0 0 18 18"
  >
    <polygon
      fill-rule="nonzero"
      fill="currentColor"
      points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
    ></polygon>
  </svg>
);

const giftIcon = (
  <svg className={classes.giftIcon} aria-hidden="false" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
    ></path>
  </svg>
);

const gifIcon = (
  <svg className={classes.gifIcon} aria-hidden="false" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"
    ></path>
  </svg>
);

const smileIcon = (
  <svg
    className={classes.smileIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
  >
    <path
      fill="currentColor"
      d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
    />
    <ellipse fill="#664500" cx="11.5" cy="12.5" rx="2.5" ry="5.5" />
    <ellipse fill="#664500" cx="24.5" cy="12.5" rx="2.5" ry="5.5" />
    <path
      fill="#664500"
      d="M18 22c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
    />
    <path fill="#FFF" d="M9 23s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" />
  </svg>
);

const notificationIcon = (
  <svg
    x="0"
    y="0"
    className={classes.notificationIcon}
    aria-hidden="false"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M21.178 1.70703L22.592 3.12103L4.12103 21.593L2.70703 20.178L21.178 1.70703Z"
    ></path>
    <path
      fill="currentColor"
      d="M18 10.5283L10.5287 18H21V17C19.344 17 18 15.657 18 14V10.5283Z"
    ></path>
    <path
      fill="currentColor"
      d="M8.957 19.5718L9.52877 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21C10.7748 21 9.68752 20.442 8.957 19.5718Z"
    ></path>
    <path
      fill="currentColor"
      d="M12 3C13.417 3 14.71 3.5 15.734 4.321L5.99805 14.058C5.99805 14.0479 5.99856 14.038 5.99907 14.0283C5.99956 14.0188 6.00005 14.0094 6.00005 14V9C6.00005 5.686 8.68605 3 12 3Z"
    ></path>
  </svg>
);

const pinIcon = (
  <svg className={classes.pinIcon} aria-hidden="false" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
    ></path>
  </svg>
);

const friendsIcon = (
  <svg className={classes.friendsIcon} aria-hidden="false" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <path
        fill="currentColor"
        fill-rule="nonzero"
        d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
        transform="translate(2 4)"
      ></path>
      <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
    </g>
  </svg>
);

const inboxIcon = (
  <svg
    className={classes.inboxIcon}
    aria-hidden="false"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
      fill="currentColor"
    ></path>
  </svg>
);

const questionMarkIcon = (
  <svg
    className={classes.questionMarkIcon}
    aria-hidden="false"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
    ></path>
  </svg>
);

const discordMiniLogo = (
  <svg
    className={classes.discordMiniLogo}
    aria-hidden="false"
    viewBox="0 0 28 20"
    width="28"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M20.6644 20C20.6644 20 19.8014 18.9762 19.0822 18.0714C22.2226 17.1905 23.4212 15.2381 23.4212 15.2381C22.4384 15.881 21.5034 16.3334 20.6644 16.6429C19.4658 17.1429 18.3151 17.4762 17.1884 17.6667C14.887 18.0953 12.7774 17.9762 10.9795 17.6429C9.61301 17.381 8.43836 17 7.45548 16.6191C6.90411 16.4048 6.30479 16.1429 5.70548 15.8096C5.63356 15.7619 5.56164 15.7381 5.48973 15.6905C5.44178 15.6667 5.41781 15.6429 5.39384 15.6191C4.96233 15.381 4.7226 15.2143 4.7226 15.2143C4.7226 15.2143 5.87329 17.1191 8.91781 18.0238C8.19863 18.9286 7.31164 20 7.31164 20C2.0137 19.8333 0 16.381 0 16.381C0 8.7144 3.45205 2.50017 3.45205 2.50017C6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861L10.4281 0.285909C6.11301 1.52399 4.12329 3.40493 4.12329 3.40493C4.12329 3.40493 4.65068 3.11921 5.53767 2.71446C8.10274 1.59542 10.1404 1.2859 10.9795 1.21447C11.1233 1.19066 11.2432 1.16685 11.387 1.16685C12.8493 0.976379 14.5034 0.92876 16.2295 1.11923C18.5068 1.38114 20.9521 2.0478 23.4452 3.40493C23.4452 3.40493 21.5514 1.61923 17.476 0.381146L17.8116 0.000197861C17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017C24.5479 2.50017 28 8.7144 28 16.381C28 16.381 25.9623 19.8333 20.6644 20ZM9.51712 8.88106C8.15068 8.88106 7.07192 10.0715 7.07192 11.5239C7.07192 12.9763 8.17466 14.1667 9.51712 14.1667C10.8836 14.1667 11.9623 12.9763 11.9623 11.5239C11.9863 10.0715 10.8836 8.88106 9.51712 8.88106ZM18.2671 8.88106C16.9007 8.88106 15.8219 10.0715 15.8219 11.5239C15.8219 12.9763 16.9247 14.1667 18.2671 14.1667C19.6336 14.1667 20.7123 12.9763 20.7123 11.5239C20.7123 10.0715 19.6336 8.88106 18.2671 8.88106Z"
    ></path>
  </svg>
);

const Server1 = () => {
  return (
    <div className={classes.main}>
      <div className={classes.channelList}>
        <div className={classes.newLine}>
          <p>newLine</p>
          <svg
            className={classes.closeIcon}
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
            ></path>
          </svg>
        </div>
        <p className={classes.grey}>
          {hashtag}
          rules
        </p>
        <p>
          {arrorDown}
          TEXT CHANNELS
        </p>
        <p>
          {hashtag}
          algorithms
        </p>
        <p>
          {hashtag}
          announcements
        </p>
        <p>
          {hashtag}
          blogging
        </p>
        <p className={classes.grey}>
          {hashtag}
          collaborators
        </p>
        <p className={classes.grey}>
          {hashtag}
          course-ideas
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>
        <p>
          {hashtag}
          machine-learning
        </p>

        <div className={classes.profile}>
          <div className={classes.first}>{discordMiniLogo}</div>
          <div>
            <h4>milad</h4>
            <h4>#8454</h4>
          </div>
          <div className={classes.last}>
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
                fill="currentColor"
              ></path>
              <path
                d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
                fill="currentColor"
              ></path>
              <path
                d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
                  fill="currentColor"
                ></path>
              </svg>
            </svg>
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={classes.mainSection}>
        <div className={classes.header}>
          <p>
            {hashtag}
            Javascript
          </p>
          <div className={classes.icons}>
            {notificationIcon}
            {pinIcon}
            {friendsIcon}
          </div>
        </div>

        <a href="#">Wave to</a>

        <div className={classes.inputSection}>
          {plusIcon}
          <input
            className={classes.input}
            type="text"
            name="message"
            id="message"
            placeholder="Message #undefined"
          />
          {giftIcon}
          {gifIcon}
          {smileIcon}
        </div>
      </div>
      <div className={classes.members}>
        <div className={classes.membersInputSection}>
          <input type="text" placeholder="Search" />
          {inboxIcon}
          {questionMarkIcon}
        </div>

        <div className={classes.membersMain}>
          <h4>ONLINE--3</h4>
          <div>
            <div>{discordMiniLogo}</div>
            <p>Milad</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>Batman</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>joker</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>joker</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>joker</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>joker</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>joker</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>joker</p>
          </div>
          <div>
            <div>{discordMiniLogo}</div>
            <p>joker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server1;
