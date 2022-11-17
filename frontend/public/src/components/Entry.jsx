import React from 'react';

const Entry = ({pet}) => {
  console.log('pet', pet)
  return (
    <div className="pet-entry">
      <img className="entry-photo" src={pet.photo} />
      <p className="entry-name">{pet.name}</p>
    </div>
  )
}

export default Entry;