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
          <div className='cards w-3/4'>
            <Cards></Cards>
          </div>
          <div className='cart w-1/4'>
            <Cart></Cart>
          </div>
        </div>
      </main>

    </div>


  )
}

export default App
