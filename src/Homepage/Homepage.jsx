import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Homepage = ({ loggedIn, setLoggedIn, login, setLogin }) => {
  return (
    <div>
      <Hero
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        login={login}
        setLogin={setLogin}
      />
      <Main />
      <Footer setLogin={setLogin} />
    </div>
  );
};

export default Homepage;
