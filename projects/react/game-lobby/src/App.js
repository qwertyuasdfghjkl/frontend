// style/color border
// how to use players in router

import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'
import Header from './components/Header'
import Button from './components/Button'
import Players from './components/Players'
import About from './components/About'
import { useState } from 'react'
import Context from './components/Context'


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
      setColors(
        colors.map((c) =>
          c.color === idMatch.color ? c.used = false : c
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
  
  return (
      <Router>
        <div className="container">
          <Header />
          
          <Route path='/' exact render={(props) => (
            <>
            <Players players={players} colors={colors} changeColor={changeColor}/>
            <Button players={players}/>
            </>
            )}
          />
          {/* <Route exact path="/about" component={props => <About players={props.match.params.players}/>}/> */}
          {/* <Route path='/about' component={About}/> */}
          <Route path='/about' exact render={(props) => (
            <>
            <About players={players}></About>
            </>
          )}
          />
          
        </div>
      </Router>
  );
}

export default App;

