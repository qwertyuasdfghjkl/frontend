import Box from "@material-ui/core/Box";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Box>
      <h1 className={styles.headingStyle}>Game Lobby</h1>
    </Box>
  );
};

export default Header;
