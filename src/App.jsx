import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import TrackForm from "./components/TrackForm"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-track" element={<TrackForm />} />
      <Route path="/edit-track/:trackId" element={<TrackForm />} />
    </Routes>
  )
}

export default App