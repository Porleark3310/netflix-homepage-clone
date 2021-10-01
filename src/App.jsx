import './app.scss';
import Home from "./Pages/Home/Home"
import Watch from './Pages/Watch/Watch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Watch">
          <Watch />
        </Route>
      </Router>
  );
};

export default App;