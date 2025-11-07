import React from 'react'
import './book.css'
function Book() {
  return (
    <div>
      <img src='https://pngimg.com/d/book_PNG2118.png' alt='' height={100} width={100}/>
      <h1>Title{props.title}</h1>
      <h1>Price:{props.price}</h1>
    </div>

  )
}

export default Book