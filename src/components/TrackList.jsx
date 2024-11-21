import React from 'react'
import { Link } from 'react-router-dom'

function TrackList({ tracks, onPlay }) {
  const handleDelete = (trackId) => {
    fetch(`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${trackId}`, { method: 'DELETE' })
      .then(() => window.location.reload()) // Reload after delete
      .catch(error => console.error("Error deleting track:", error))
  };

  return (
    <div>
      <h2>Track List</h2>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <p>{track.name}</p>
            <button onClick={() => onPlay(track)}>Play</button>
            <Link to={`/edit-track/${track.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(track.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrackList
