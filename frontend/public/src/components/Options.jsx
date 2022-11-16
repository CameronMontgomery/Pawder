import React, {useState} from 'react';

const Options = ({closeOptions, search}) => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('')

  return (
    <div className="options">
    <input type="text" className="pet-location-input" placeholder="Search Location" value={location} onChange={e => setLocation(e.target.value)} />
      <select className="pet-type-input" value={type} onChange={e => setType(e.target.value)} >
        <option value="">Select Type</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <button>Favorites</button>
      <button onClick={(e) => {
        closeOptions()
        search()
      }}>Rescue Your Next Best Friend</button>
    </div>
  )
}

export default Options;