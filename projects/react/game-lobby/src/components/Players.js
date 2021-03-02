import Player from "./Player";
import { usePlayers } from "./PlayerContext";
import Grid from "@material-ui/core/Grid";

const Players = () => {
  const players = usePlayers();

  return (
    <Grid container spacing={2} justify="space-around">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
    </Grid>
  );
};

export default Players;
