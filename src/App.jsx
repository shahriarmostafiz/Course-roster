import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import Cart from './components/Cart'

function App() {

  return (
    <div className='container mx-auto'>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <div className='flex'>
          <Cards></Cards>
          <Cart></Cart>
        </div>
      </main >

    </div >


  )
}

export default App
