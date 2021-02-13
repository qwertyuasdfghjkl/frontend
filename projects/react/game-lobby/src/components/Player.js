import { useState } from 'react'

const Player = ({ player, colors, changeColor }) => {
  const[color, setColor] = useState('')



  return (
    <div className='task'>
      <h3>{player.text}</h3>
      <form className='add-form'>
        <div className='form-control'>
          <label>Choose Color</label>
            <select value={color} onChange={(e) => changeColor(player.id ,e.target.value)}>
              <option defaultValue={player.color}>{player.color}</option>
              {colors.map((eachColor) => (
                <option key={eachColor.id2} value={eachColor.color}>{eachColor.color}</option>
               ))}
            </select>

        </div>
      </form>
    </div>
  )
}

export default Player
