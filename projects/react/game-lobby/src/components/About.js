import { Link } from "react-router-dom";
import { usePlayers } from "./playerContext";

const About = () => {
  const players = usePlayers();

  return (
    <div>
      {players.map((player) => (
        <h4 key={player.id}>
          {player.text}: {player.color}
        </h4>
      ))}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
