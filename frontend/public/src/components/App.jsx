import React, {useState} from 'react';
import axios from 'axios';
import Display from './Display.jsx';
import Options from './Options.jsx';

const App = () => {
  const [isOption, setIsOption] = useState(true)
  const [currentPets, setCurrentPets] = useState([])

  const showOptions = () => {
    setIsOption(!isOption)
  }

  const search = (location, type) => {
    axios.get(`pets`, {
      params: {
        type,
        location
      }
    })
      .then(response => {
        console.log('res data', response.data)
      })
      .catch(err => console.log('Error', err))
  }

  return (
    <div className="app-container">
      <div className="app">
        <h1 className="title">pawder</h1>
        <div className="main">
          {isOption ? <Options closeOptions={showOptions} search={search}/> : <Display />}
        </div>
      </div>
    </div>

  )
}

export default App;