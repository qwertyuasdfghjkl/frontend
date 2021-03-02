import { useState } from "react";
import { COLORS, usePlayersUpdate } from "../PlayerContext/PlayerContext";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./Player.module.css";

const Player = ({ player }) => {
  const changeColors = usePlayersUpdate();

  return (
    <Grid item xs={6}>
      <Card className={styles.player}>
        <CardContent
          className={styles.cardContent}
          style={{ background: `${player.color}` }}
        >
          <Typography variant="h6">{player.text}</Typography>
        </CardContent>
        <CardActions className={styles.cardAction}>
          <FormControl variant="outlined" className={styles.colorForm}>
            <InputLabel htmlFor="outlined-form">Choose Color</InputLabel>
            <Select
              native
              value={player.color}
              onChange={(e) => changeColors(player.id, e.target.value)}
              label="Choose Color"
            >
              <option value={COLORS.default}></option>
              <option value={COLORS.blue}>blue</option>
              <option value={COLORS.red}>red</option>
              <option value={COLORS.green}>green</option>
              <option value={COLORS.yellow}>yellow</option>
              <option value={COLORS.purple}>purple</option>
            </Select>
          </FormControl>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Player;
