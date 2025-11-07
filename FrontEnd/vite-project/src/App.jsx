import React from 'react'
import Book from './component/Book'
import './App.css'
function App() {
  return (
    <div id='b'>
      <Book Title='Maths' Price='2540'/>
      <Book Title='eng' Price='1240'/>
      <Book Title='sst' Price='2740'/>
      <Book Title='Computer' Price='2400'/>
    </div>
  )
}

export default App