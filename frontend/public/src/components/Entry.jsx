import React from 'react';

const Entry = ({pet}) => {
  console.log('pet', pet)
  return (
    <a href={pet.petFinderUrl} target="_blank" rel="noreferrer"><div className="pet-entry">
      <img className="entry-photo" src={pet.photo} />
      <div className="entry-text">
        <p className="entry-name">Name: {pet.name}</p>
        <p>Status: {pet.status}</p>
        <p>Spayed or Neutered: {pet.spayedNeutered === true ? "Yes": "No"}</p>
      </div>
    </div></a>
  )
}

export default Entry;