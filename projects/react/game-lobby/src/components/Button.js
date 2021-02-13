import { Link } from 'react-router-dom'

const Button = ({ players }) => {

  return (
    <div>
      <Link className='btn' to={{pathname: "/about", state: {players}}}>Start</Link>
      {console.log(players)}
    </div>
  )
}



export default Button
