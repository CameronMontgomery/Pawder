import React, {useState, useEffect} from 'react';
import ButtonBar from './ButtonBar.jsx';
import PetCard from './PetCard.jsx';

const Display = ({pets, search, showOptions, addToFavorites}) => {
  const [pet, setPet] = useState('');
  const [index, setIndex] = useState(0)


  useEffect(() => {
    if (pets.length) {
      setPet(pets[index])
    }
  }, [pets, index])

  const nextPet = () => {
    if (index === pets.length - 1) {
      search()
    }
    setIndex(index + 1)
  }

  return (
    <div className="display">
      {!pet ? <div className="loader"></div> : <PetCard pet={pet}/>}
      <ButtonBar search={search} pet={pet} addToFavorites={addToFavorites} showOptions={showOptions} nextPet={nextPet}/>
    </div>
  )


}

export default Display;