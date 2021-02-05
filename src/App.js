import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import SuperFriends from "./components/SuperFriends/SuperFriends"
import ArrowCafe from "./components/ArrowCafe/ArrowCafe"
import Peace from "./components/Peace/Peace"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/super-friends">
            <SuperFriends />
          </Route>
          <Route path="/arrow-cafe">
            <ArrowCafe />
          </Route>
          <Route path="/peace">
            <Peace />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
