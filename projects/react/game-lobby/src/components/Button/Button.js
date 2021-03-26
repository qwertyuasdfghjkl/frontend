import { Link } from "react-router-dom";
import { usePlayers } from "../PlayerContext/PlayerContext";
import Button from "@material-ui/core/Button";
import styles from "./Button.module.css";

const ButtonAbout = () => {
  const players = usePlayers();

  return (
    <>
      <Link className={styles.btn} to="/about">
        Start
      </Link>
    </>
  );
};

export default ButtonAbout;
