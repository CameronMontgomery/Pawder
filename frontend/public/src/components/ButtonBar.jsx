import React from 'react';


const ButtonBar = ({nextPet, showOptions, addToFavorites, pet}) => {
  return (
    <div className="button-bar">
      <button className="skip-btn" onClick={() => nextPet()}>Skip</button>
      <button className="favorite-btn" onClick={() => {
        addToFavorites(pet)
        nextPet()
      }}>Heart</button>
      <button className="options-btn" onClick={() => showOptions()}>Options</button>
    </div>
  )
}

export default ButtonBar;