import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import Cart from './components/Cart'

function App() {
  const [selectedCourses, setCourse] = useState([])
  const [creditHour, setCreditHour] = useState(0)
  function handleAddCourse(card) {
    // console.log(card.name, card.price);
    const isExist = selectedCourses.find(item => item.id === card.id)
    if (isExist) {
      return alert('you already selected this course')
    }
    let totalCredit = creditHour + card.credit_hours
    setCreditHour(totalCredit)
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
          <Cart selectedCourses={selectedCourses} creditHour={creditHour}></Cart>
        </div>
      </main >

    </div >


  )
}

export default App
