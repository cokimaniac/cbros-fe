import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Test from "./pages/Test";
import Ammounts from "./pages/Ammounts";
// components

function App() {
  let auth = window.localStorage.getItem("tokenAuth");
  return (
    <div className="App">
      <Router>
        <div id="menu">
          {auth}
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/test">Test</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/test" component={Test}></Route>
          <Route path="/ammounts/:debtorId" component={Ammounts}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
