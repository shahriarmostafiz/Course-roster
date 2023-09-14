import { useState } from 'react'

import { toast } from 'react-toastify';
import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import Cart from './components/Cart'

function App() {
  const [selectedCourses, setCourse] = useState([])
  const [creditHour, setCreditHour] = useState(0)
  const [remainnigCredit, setRemainingCredit] = useState(20)
  function handleAddCourse(card) {
    // console.log(card.name, card.price);
    const isExist = selectedCourses.find(item => item.id === card.id)
    if (isExist) {
      return toast.error('You have already selected this course!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    let totalCredit = creditHour + card.credit_hours
    let budgetCr = 20;
    let remainnigCr = budgetCr - totalCredit;
    if (remainnigCr < 0) {
      return toast.error('Insufficient credit balance You already have  selected 20 credits!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    setCreditHour(totalCredit)
    setRemainingCredit(remainnigCr)
    const newCourses = [...selectedCourses, card]
    setCourse(newCourses)
  }
  // console.log(handleCourse);
  return (
    <div className='mx-auto'>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <div className='lg:flex w-full'>
          <Cards handleAddCourse={handleAddCourse}></Cards>
          <Cart selectedCourses={selectedCourses} creditHour={creditHour} remainnigCredit={remainnigCredit}></Cart>
        </div>
      </main >

    </div >


  )
}

export default App
