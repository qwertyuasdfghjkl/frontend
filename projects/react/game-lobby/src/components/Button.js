import { Link } from "react-router-dom";
import { usePlayers } from "./playerContext";

const Button = () => {
  const players = usePlayers();

  return (
    <div>
      <Link className="btn" to={{ pathname: "/about", state: { players } }}>
        Start
      </Link>
    </div>
  );
};

export default Button;
