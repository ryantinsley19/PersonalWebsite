import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import MainContainer from "./components/common/MainContainer"
import Test from "./containers/test"

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/test">Test</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/test">
                <Test />
              </Route>
            </Switch>
          </div>
        </Router>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

/*
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
