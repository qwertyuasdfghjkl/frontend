import { useState } from "react";
import { COLORS, usePlayersUpdate } from "./PlayerContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";


const Player = ({ player }) => {
  const changeColors = usePlayersUpdate();
  const [color] = useState("");

  return (
    <Grid item xs={6}>
      <Card className="player">
        <CardContent
          className="cardContent"
          style={{ background: `${player.color}` }}
        >
          <Typography variant="h6">{player.text}</Typography>
        </CardContent>
        <CardActions className="cardAction">
          <FormControl variant="outlined" className="colorForm">
            <InputLabel htmlFor="outlined-form">Choose Color</InputLabel>
            <Select
              native
              value={color}
              onChange={(e) => changeColors(player.id, e.target.value)}
              label="Choose Color"
              // inputProps={{
              //   name: 'color',
              //   id: 'outlined-form',
              // }}
            >
              <option value={COLORS.default}>{player.color}</option>
              <option value={COLORS.blue}>blue</option>
              <option value={COLORS.red}>red</option>
              <option value={COLORS.green}>green</option>
              <option value={COLORS.yellow}>yellow</option>
              <option value={COLORS.purple}>purple</option>
            </Select>
          </FormControl>
         

          {/* <FormControl variant="outlined" className="colorForm">
            <Select
              native
              value={color}
              onChange={(e) => changeColors(player.id, e.target.value)}
            >
              <option defaultValue={player.color}>{player.color}</option>
              <option value={COLORS.blue}>blue</option>
              <option value={COLORS.red}>red</option>
              <option value={COLORS.green}>green</option>
              <option value={COLORS.yellow}>yellow</option>
              <option value={COLORS.purple}>purple</option>
            </Select>
          </FormControl> */}

           {/* <FormControl variant="outlined" className="colorForm">
            <NativeSelect
              value={color}
              onChange={(e) => changeColors(player.id, e.target.value)}
            >
              <option value={COLORS.default}>{player.color}</option>
              <option value={COLORS.blue}>blue</option>
              <option value={COLORS.red}>red</option>
              <option value={COLORS.green}>green</option>
              <option value={COLORS.yellow}>yellow</option>
              <option value={COLORS.purple}>purple</option>
            </NativeSelect>
          </FormControl> */}

          {/* <form className="colorForm" style={{ background: `${player.color}` }}>
            <label>Choose Color</label>
            <TextField
              id="select-color"
              select
              label="select color"
              value={color}
              onChange={(e) => changeColors(player.id, e.target.value)}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
              variant="outlined"
            >
              <option defaultValue={player.color}>{player.color}</option>
              <option value={COLORS.blue}>blue</option>
              <option value={COLORS.red}>red</option>
              <option value={COLORS.green}>green</option>
              <option value={COLORS.yellow}>yellow</option>
              <option value={COLORS.purple}>purple</option>
            </TextField> */}
          
          {/* <form className="colorForm" style={{ background: `${player.color}` }}>
          
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
          </form>  */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Player;
