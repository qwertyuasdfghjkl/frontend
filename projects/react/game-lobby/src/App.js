import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

import Routes from "./components/Routes";
import { PlayerContext } from "./components/playerContext";
//ss
function App() {
  return (
    <PlayerContext>
      <Routes />
    </PlayerContext>
  );
}

export default App;
