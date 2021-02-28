import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import Button from "./components/Button";
import Players from "./components/Players";
import About from "./components/About";
import { PlayerContext } from "./components/playerContext";

function App() {
  return (
    <Router>
      <PlayerContext>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <Players />
                <Button />
              </>
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <>
                <About></About>
              </>
            )}
          />
        </div>
      </PlayerContext>
    </Router>
  );
}

export default App;
