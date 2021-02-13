import PropTypes from 'prop-types'


const Button = ({ onClick }) => {
  


  return (
    <button onClick={onClick} className='btn'>Start</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}


export default Button
