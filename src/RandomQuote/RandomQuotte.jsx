import React, { useState } from 'react'
import './RandomQuote.css'
import r_icon from '../Asset/ref.png'



 const RandomQuote = () => {

    
  let quotes=[];
  
  async function loadQuotes(){
    const response=await fetch("https://type.fit/api/quotes");
    
    quotes=await response.json(); 
  }

  const [quote, setQuote]=useState({
     text : "It's never too late to be what you might have been",
    author : "George Eliot",
  })


  const random= ()=>{
    const sellect=quotes[Math.floor(Math.random()*16+1)];
    setQuote(sellect);
  }
  loadQuotes();


  return (
    <div className='container'>
    <div className="quote">"{quote.text}"</div>
    <div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">-{quote.author.split(",")[0]}</div>
        <div className="icon">
          <img onClick={()=>{
            random()
          }}  src={r_icon} alt="" />
          
        </div>
      </div>
    </div>
    
    
    </div>
  )
}

export default RandomQuote;