import { useState } from 'react'

const Player = ({ player, changeColors }) => {
  const[color] = useState('')



  return (
    <div className='task' style={{background: `${player.color}`}}>
        <h3>{player.text}</h3>
        <form className='add-form'>
          <div className='form-control'>
            <label>Choose Color</label>
              <select value={color} onChange={(e) => changeColors(player.id ,e.target.value)}>
                <option defaultValue={player.color}>{player.color}</option>
                <option value={'blue'}>blue</option>
                <option value={'red'}>red</option>
                <option value={'green'}>green</option>
                <option value={'yellow'}>yellow</option>
                <option value={'purple'}>purple</option>
              </select>

          </div>
        </form>
    </div>
  )
}

// const changeColor = {
//   background: `${player.color}`
// }

export default Player
