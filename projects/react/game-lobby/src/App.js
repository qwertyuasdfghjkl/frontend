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
        color: '',
      },
      {
        id: 2,
        text: 'P2',
        color: '',
      },
      {
        id: 3,
        text: 'P3',
        color: '',
      },
      {
        id: 4,
        text: 'P4',
        color: '',
      }
    ]
  )

  const changeColors = (compareId, compareColor) => {
    const chosenPlayer = players.filter((p) => p.id === compareId)[0]
    const usedColors = players.filter((p) => p.color !== '')
    const colors = usedColors.map((c) => c.color)
    console.log('adsf',colors)

    // if the player is already this color
    if (chosenPlayer.color === compareColor) {
      alert('You have already chosen this color.')
      return
    }

    // if compareColor is not already used
    if (!colors.includes(compareColor)) {
      // set players color
      setPlayers(
        players.map((p) => 
          p.id === compareId ? {...p, color: compareColor} : p
        )
      )
    }
    // if color is already used
    else {
      alert('Color is already chosen, Please choose a different colour')
    }
  }

  return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path='/' render={(props) => (
            <>
            <Players players={players} changeColors={changeColors}/>
            <Button players={players}/>
            </>
            )}
          />
          <Route path='/about' render={(props) => (
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

