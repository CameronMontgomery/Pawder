import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Display from './Display.jsx';
import Options from './Options.jsx';

const App = () => {
  const [isOption, setIsOption] = useState(true)
  const [currentPets, setCurrentPets] = useState([])
  const [searchOffset, setSearchOffset] = useState(1)
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (pet) => {
    let current = favorites
    current.push(pet)
    setFavorites(current)
  }

  useEffect(() => {
    console.log(searchOffset)
  }, [searchOffset])

  const resetOffset = () => {
    setCurrentPets([])
    setSearchOffset(1)
  }

  const showOptions = () => {
    setIsOption(!isOption)
  }

  const search = (location, type) => {
    location = location || '94105'
    type = type || 'dog'
    axios.get(`pets`, {
      params: {
        type,
        location,
        page: searchOffset
      }
    })
      .then(response => {
         const mappedPets = response.data.map((pet) => {
          if (pet.photos.length === 0){
            return null
          }
          return {
            petId: pet.id,
            name: pet.name,
            petFinderUrl: pet.url,
            photo: pet.photos[0].medium,
            status: pet.status,
            spayedNeutered: pet.attributes.spayed_neutered
          }
        })

        const parsedPets = mappedPets.filter((pet) => {
          return pet !== null
        })

        console.log('new pets with photos', parsedPets)
        if (currentPets.length === 0) {
          setSearchOffset(searchOffset + 1)
          setCurrentPets(parsedPets)
        } else {
          setSearchOffset(searchOffset + 1)
          setCurrentPets([...currentPets, ...parsedPets])
        }
      })
      .catch(err => console.log('Error', err))
  }

  return (
    <div className="app-container">
      <div className="app">
        <div className="header">
          <img className="title-paw rotate" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Paw-print.svg" />
          <h1 className="title">pawder</h1>
        </div>
        <div className="main">
          {isOption ? <Options closeOptions={showOptions} favorites={favorites} search={search} resetOffset={resetOffset}/> : <Display pets={currentPets} search={search} addToFavorites={addToFavorites} showOptions={showOptions}/>}
        </div>
      </div>
    </div>

  )
}

export default App;