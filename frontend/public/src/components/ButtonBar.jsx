import React from 'react';


const ButtonBar = ({nextPet, showOptions}) => {
  return (
    <div className="button-bar">
      <button onClick={() => nextPet()}>Skip</button>
      <button onClick={() => {
        // addToFavorites()
        nextPet()
      }}>Heart</button>
      <button onClick={() => showOptions()}>Options</button>
    </div>
  )
}

export default ButtonBar;