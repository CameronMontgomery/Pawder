import React, {useState} from 'react';
import FavoritesList from './FavoritesList.jsx';

const Options = ({closeOptions, search, changeSearch, favorites}) => {
  const [location, setLocation] = useState('');
  const [lastLocation, setLastLocation] = useState('')
  const [type, setType] = useState('')
  const [lastType, setLastType] = useState('')
  const [isFavorites, setIsFavorites] = useState(false);

  return (
    <div className="options">
    <input type="text" className="pet-location-input" placeholder="Search Location" value={location} onChange={e => setLocation(e.target.value)} />
      <select className="pet-type-input" value={type} onChange={e => setType(e.target.value)} >
        <option value="">Select Type</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <>
        {isFavorites ? <FavoritesList favorites={favorites}/> : null}
      </>
      <button onClick={(e) => {
        setIsFavorites(!isFavorites)
      }}>Favorites</button>
      <button onClick={(e) => {
        if (!lastLocation && !lastType) {
          closeOptions()
          setLastLocation(location)
          setLastType(type)
          search(location, type)
        } else if (lastLocation !== location || lastType !== type) {
          changeSearch(location, type)
          closeOptions()
          search(location, type)
          setLastType(type)
          setLastLocation(location)
        } else {
          closeOptions()
        }
      }}>Rescue Your Next Best Friend</button>
    </div>
  )
}

export default Options;