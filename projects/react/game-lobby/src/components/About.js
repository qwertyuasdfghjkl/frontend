import { Link } from 'react-router-dom'
import { useParams } from 'react-router'


const About = () => {


    return (
      <div>
        {/* {players.map((player) => (
          <h4 key={player.id}>{player.text}: {player.color}</h4>
          )
        )}  */}
        <Link to='/'>Go Back</Link>
      </div>
    )
  }


export default About
