import { Link } from "react-router-dom";
import { usePlayers } from "./PlayerContext";
import Header from "./Header";
import { Box, Container, Button } from "@material-ui/core";


const About = () => {
  const players = usePlayers();

  return (
    <Container maxWidth="sm" className="container">
      <Header />
      <Box>
        {players.map((player) => (
          <h4 key={player.id}>
            {player.text}: {player.color}
          </h4>
        ))}
        <Link className="btn" to="/">Go Back</Link>
      </Box>
    </Container>
  );
};

export default About;
