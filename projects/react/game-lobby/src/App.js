import Header from './components/Header'
import Button from './components/Button'
import Players from './components/Players'
import { useState} from 'react'


function App() {
  const [players, setPlayers] = useState(
    [
      {
        id: 1,
        text: 'P1',
        color: 'Choose Color',
      },
      {
        id: 2,
        text: 'P2',
        color: 'Choose Color',
      },
      {
        id: 3,
        text: 'P3',
        color: 'Choose Color',
      },
      {
        id: 4,
        text: 'P4',
        color: 'Choose Color',
      }
    ]
  )

  const[colors, setColors] = useState(
    [
      {
        id2: 1,
        color: 'blue',
        used: false,
      },
      {
        id2: 2,
        color: 'red',
        used: false,
      },
      {
        id2: 3,
        color: 'green',
        used: false,
      },
      {
        id2: 4,
        color: 'yellow',
        used: false,
      },
    ]
  )

  


  const onClick = () => {
    console.log('click')
  }
  
  return (
    <div className="container">
      <Header />
      <Players players={players} colors={colors}/>
      <Button onClick={onClick}/>
    </div>
  );
}

export default App;
