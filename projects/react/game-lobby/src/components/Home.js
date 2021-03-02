import Header from "./Header";
import Button from "./Button";
import Players from "./Players";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div className="container">
      <Box>
        <Header />
        <Players />
        <Button />
      </Box>
    </div>
  );
}

export default App;
