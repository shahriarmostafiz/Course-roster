import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import Cart from './components/Cart'
import { func } from 'prop-types'

function App() {
  const [selectedCourses, setCourse] = useState([])
  function handleAddCourse(card) {
    console.log(card.name, card.price);
    const newCourses = [...selectedCourses, card]
    setCourse(newCourses)
  }
  // console.log(handleCourse);
  return (
    <div className='container mx-auto'>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <div className='flex'>
          <Cards handleAddCourse={handleAddCourse}></Cards>
          <Cart selectedCourses={selectedCourses}></Cart>
        </div>
      </main >

    </div >


  )
}

export default App
