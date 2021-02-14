import { Link } from 'react-router-dom'

const Button = ({ players }) => {

  return (
    <div>
      <Link className='btn' to={{pathname: "/about", state: {players}}}>Start</Link>
    </div>
  )
}



export default Button
