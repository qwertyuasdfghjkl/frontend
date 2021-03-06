import Header from "../Header/Header";
import Button from "../Button/Button";
import Players from "../Players/Players";
import Login from "../Login/Login"
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "./Home.module.css";

function App() {
  return (
    <div>
      <Container maxWidth="sm" className={styles.container}>
        <Header />
        <Login />
        <Players />
        <Button />
      </Container>
    </div>
  );
}

export default App;
