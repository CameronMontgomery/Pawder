import React from 'react';

const PetCard = ({pet, next}) => {
  console.log('pet', pet)
  return (
    <div className="card">
      <img className="pet-photo" src={pet.photo} />
      <p className="pet-name">{pet.name}</p>
    </div>
  )
}

export default PetCard;