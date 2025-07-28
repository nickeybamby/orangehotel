import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Nav from './components/nav/Nav'
import Index from './components/pages/Index'

function App() {

  return (
  <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Index />}></Route>
      </Routes>
    </Router>
  </>
  )
}

export default App
