import Player from './Player'

const Players = ({ players, colors, falseUsed, changeColor }) => {
  return (
    <>
      {players.map((player) => (
        <Player key={player.id} player={player} colors={colors} falseUsed={falseUsed} changeColor={changeColor}/>
      ))}
    </>
  )
}

export default Players
