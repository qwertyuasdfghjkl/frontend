import { Link } from "react-router-dom";
import { usePlayers } from "./PlayerContext";
import Button from "@material-ui/core/Button";

const ButtonAbout = () => {
  const players = usePlayers();

  return (
    <Button variant="contained">
      <Link className="btn" to={{ pathname: "/about", state: { players } }}>
        Start
      </Link>
    </Button>
  );
};

export default ButtonAbout;
