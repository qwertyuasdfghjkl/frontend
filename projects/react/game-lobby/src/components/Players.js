import Player from './Player'

const Players = ({ players, colors, changeColor }) => {
  return (
    <>
      {players.map((player) => (
        <Player key={player.id} player={player} colors={colors} changeColor={changeColor}/>
      ))}
    </>
  )
}

export default Players
