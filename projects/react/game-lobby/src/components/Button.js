import { Link } from "react-router-dom";
import { usePlayers } from "./PlayerContext";
import Button from "@material-ui/core/Button";

const ButtonAbout = () => {
  const players = usePlayers();

  return (
      <Link className="btn" to="/about">
        Start
      </Link>
  );
};

export default ButtonAbout;
