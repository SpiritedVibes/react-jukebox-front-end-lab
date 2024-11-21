import React, { useState, useEffect } from 'react'
import TrackList from './TrackList'
import NowPlaying from './NowPlaying'
import { Link } from 'react-router-dom'

function Home() {
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    // Fetch tracks from the backend server
    fetch(`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`)
      .then(response => response.json())
      .then(data => setTracks(data))
      .catch(error => console.error("Error fetching tracks:", error))
  }, [])

  const handlePlay = (track) => {
    setCurrentTrack(track);
  }

  return (
    <div>
      <h1>Music Dashboard</h1>
      <Link to="/add-track">
        <button>Add New Track</button>
      </Link>
      <TrackList tracks={tracks} onPlay={handlePlay} />
      {currentTrack && <NowPlaying track={currentTrack} />}
    </div>
  )
}

export default Home