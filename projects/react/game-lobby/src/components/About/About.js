import { Link } from "react-router-dom";
import { usePlayers } from "../PlayerContext/PlayerContext";
import Header from "../Header/Header";
import { Box, Container, Button } from "@material-ui/core";
import styles from "./About.module.css";

const About = () => {
  const players = usePlayers();

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Header />
      <Box>
        {players.map((player) => (
          <h4 key={player.id}>
            {player.text}: {player.color}
          </h4>
        ))}
        <Link className={styles.btn} to="/">
          Go Back
        </Link>
      </Box>
    </Container>
  );
};

export default About;
