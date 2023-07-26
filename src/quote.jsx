import './quote.css';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';




function  Quote() {
    const [quotes,setQuote]=useState("");

    const getquote=()=>{
    axios.get(`https://api.adviceslip.com/advice`)
    .then((response)=>{
        console.log(response)
        const data=response.data.slip;
        console.log(data)
        const advice=data.advice;
        console.log(advice)
        setQuote(advice);
    });

}
  return (
    <div className='main'> 
           <Navbar/>
       <div className='content'><center>
       <div className='button'><br /><br />
       <br /><br /><br />
           <button onClick={getquote} >Get Quote</button>   
          </div>
           <div className='quote'>
               <div className='writeup'>
                   {quotes}

               </div>

           </div>
           

           </center></div>
    </div>
  );
  }

export default Quote;
