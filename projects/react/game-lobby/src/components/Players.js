import Player from "./Player";
import { usePlayers } from "./playerContext";

const Players = () => {
  const players = usePlayers();
  console.log(players);

  return (
    <>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </>
  );
};

export default Players;
