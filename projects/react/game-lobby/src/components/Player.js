import { useState } from 'react'

const Player = ({ player, colors }) => {
  const[color, setColor] = useState('')

  

  return (
    <div className='task'>
      <h3>{player.text}</h3>
      <form className='add-form'>
        <div className='form-control'>
          <label>Choose Color</label>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option defaultValue={player.color}>{player.color}</option>
              {colors.map((eachColor) => (
                <option key={eachColor.id2} value={eachColor.color}>{eachColor.color}</option>
               ))}
            </select>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Player
