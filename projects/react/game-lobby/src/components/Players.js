import Player from './Player'

const Players = ({ players, colors }) => {
  return (
    <>
      {players.map((player) => (
        <Player key={player.id} player={player} colors={colors}/>
      ))}
    </>
  )
}

export default Players
