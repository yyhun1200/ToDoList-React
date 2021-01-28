import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage.jsx";
import LoginPage from "./components/LoginPage/loginPage";

const App = ({ authService }) => {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage authService={authService} />
          </Route>
          <Route exact path="/login">
            <LoginPage authService={authService} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
