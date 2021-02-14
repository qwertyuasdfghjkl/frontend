import { Link } from 'react-router-dom'


const About = ({ players }) => {



    return (
      <div>

          
        {players.map((player) => (
          <h4 key={player.id}>{player.text}: {player.color}</h4>
          )
        )} 
        <Link to='/'>Go Back</Link>
      </div>
    )
  }


export default About
