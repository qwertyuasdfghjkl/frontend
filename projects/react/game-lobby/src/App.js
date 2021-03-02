// import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

import Routes from "./components/Router/Routes";
import { PlayerContext } from "./components/PlayerContext/PlayerContext";

function App() {
  return (
    <PlayerContext>
      <Routes />
    </PlayerContext>
  );
}

export default App;
