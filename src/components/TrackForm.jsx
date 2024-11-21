import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function TrackForm() {
  const [name, setName] = useState('')
  const { trackId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (trackId) {
      fetch(`${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${trackId}`)
        .then(response => response.json())
        .then(data => setName(data.name))
        .catch(error => console.error("Error fetching track:", error))
    }
  }, [trackId])

  const handleSubmit = (e) => {
    e.preventDefault()
    const method = trackId ? 'PUT' : 'POST';
    const url = trackId
      ? `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/${trackId}`
      : `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
      .then(() => navigate('/'))
      .catch(error => console.error("Error saving track:", error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{trackId ? 'Edit Track' : 'Add New Track'}</h2>
      <label>
        Track Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  )
}

export default TrackForm
