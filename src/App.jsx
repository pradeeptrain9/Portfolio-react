import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Contact/>
      </>
  )
}

export default App
