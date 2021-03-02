import { useState } from "react";
import { COLORS, usePlayersUpdate } from "./PlayerContext";

const Player = ({ player }) => {
  const changeColors = usePlayersUpdate();
  const [color] = useState("");

  return (
    <div className="task" style={{ background: `${player.color}` }}>
      <h3>{player.text}</h3>
      <form className="add-form">
        <div className="form-control">
          <label>Choose Color</label>
          <select
            value={color}
            onChange={(e) => changeColors(player.id, e.target.value)}
          >
            <option defaultValue={player.color}>{player.color}</option>
            <option value={COLORS.blue}>blue</option>
            <option value={COLORS.red}>red</option>
            <option value={COLORS.green}>green</option>
            <option value={COLORS.yellow}>yellow</option>
            <option value={COLORS.purple}>purple</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Player;
