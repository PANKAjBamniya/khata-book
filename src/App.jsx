import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = (() => {
    setDarkMode(!darkMode)
  })

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar changeTheme={changeTheme} darkMode={darkMode}/>
      <Home/>
    </div>
  )
}

export default App
