import Player from './Player'

const Players = ({ players, changeColors }) => {
  return (
    <>
      {players.map((player) => (
        <Player key={player.id} player={player} changeColors={changeColors}/>
      ))}
    </>
  )
}

export default Players
