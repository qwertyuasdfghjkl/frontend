

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps ={
  title: 'Game Lobby',
}

const headingStyle = {
  textAlign: 'center',

}

export default Header
