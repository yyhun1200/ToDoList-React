import styles from "./app.module.css";
import LandingPage from "./components/LandingPage/landingPage.jsx";
import LoginPage from "./components/LoginPage/loginPage";

const App = () => {
  return (
    <div className={styles.App}>
      <LoginPage />
    </div>
  );
};

export default App;
