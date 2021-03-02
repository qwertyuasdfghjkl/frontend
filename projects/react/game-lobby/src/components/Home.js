import Header from "./Header";
import Button from "./Button";
import Players from "./Players";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "../index.css";

function App() {
  return (
    <div className="root">
      <Container maxWidth="sm" className="container">
        <Header />
        <Players />
        <Button />
      </Container>
      </div>
  );
}

export default App;
