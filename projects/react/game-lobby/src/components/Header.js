import Box from "@material-ui/core/Box"

const Header = ({ title }) => {
  return (
    <Box>
      <h1 style={headingStyle}>{title}</h1>
    </Box>
  );
};

Header.defaultProps = {
  title: "Game Lobby",
};

const headingStyle = {
  textAlign: "center",
  margin: "25px 0px",
};

export default Header;
