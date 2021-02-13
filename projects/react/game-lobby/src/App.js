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

  const changeColor = (compareId, compareColor) => {
    const colorMatch = colors.filter((c) => c.color === compareColor)[0]
    const idMatch = players.filter((p) => p.id === compareId)[0]

    // if the player is already this color
    if (colorMatch.used & idMatch.color === compareColor) {
      alert('You have already chosen this color.')
      return
    }

    // set used to false for players old color
    if (idMatch.color !== "Choose Color" & !colorMatch.used) {
      console.log(idMatch.color)
      setColors(
        colors.map((c) =>
          c.color === idMatch.color ? {...c, used: false } : c
        )
      )
    }

    // if color not used
    if (!colorMatch.used) {
      // set new color used to true
      setColors(
        colors.map((c) =>
          c.color === compareColor ? {...c, used: true } : c
        )
      )
      // set players color
      setPlayers(
        players.map((p) => 
          p.id === compareId ? {...p, color: compareColor} : p
        )
      )

      // if the color is already picked
    } else {
      alert('Color is already chosen, Please choose a different colour')
    }
  }

  

  const onClick = () => {
    console.log('click')
  }
  
  return (
    <div className="container">
      <Header />
      <Players players={players} colors={colors} changeColor={changeColor}/>
      <Button onClick={onClick}/>
    </div>
  );
}

export default App;
