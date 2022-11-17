import React, { useState } from 'react';
import Entry from './Entry.jsx';

const FavoritesList = ({favorites}) => {
  console.log('pet favorite', favorites)
  return (
    <div className="favorites-list">
      { !!!favorites.length ? "Add pets to your favorites to view them here" : (
        favorites.map(pet => {
          return <Entry pet={pet} key={pet.petId}/>
      }))}
    </div>
  )
}

export default FavoritesList;