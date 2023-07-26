import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Wordquote from './wordquote';
import Navbar from './navbar';




function Idquote() {
    const [quotes,setQuote]=useState("");
    const [inputs,setinputs]=useState("");

    const getquote=()=>{
        console.log(inputs)
    axios.get(`https://api.adviceslip.com/advice/`+inputs)
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
       <div className='button'>
      
           <input type="number" value={inputs} onChange={(e)=>setinputs(e.target.value)}  placeholder='enter the index'/><br/>
          <br /> <button id="idb" onClick={getquote} >Get Quote</button>
           
          </div>
           <div className='quote'>
               <div className='writeup'>
                   {quotes}

               </div>

           </div>
           
           
           </center></div>
           <h2 id="qs">Quote Search By ID</h2>
    </div>
  );
}

export default Idquote;
