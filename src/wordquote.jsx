import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';




function  Wordquote() {
    const [quotes,setwordQuote]=useState("");
    const [inputs,setwordinputs]=useState("");

    const getwordquote=()=>{
        console.log(inputs)
    axios.get(`https://api.adviceslip.com/advice/search/`+inputs)
    .then((response)=>{
        try{
        console.log(response)
        const data=response.data.slips[0];
        console.log(data)
        const advice=data.advice;
        console.log(advice)
        setwordQuote(advice);
        }
        catch(error)
       {setwordQuote("No data found")}
    });
   
}
    const next=()=>{
        console.log(inputs)
        axios.get(`https://api.adviceslip.com/advice/search/`+inputs)
        .then((response)=>{
            try{
            console.log(response)
            let c=0
            c++
            const data=response.data.slips[c];
            console.log(data)
            const advice=data.advice;
            console.log(advice)
            setwordQuote(advice);
            }
            catch(error)
           {setwordQuote("Thats all for the word")}
        });

    }
  return (
    <div className='main'> 
    <Navbar/>
       <div className='content'><center>
       
       <div className='button'>
       
           <input id="word" type="text" value={inputs} onChange={(e)=>setwordinputs(e.target.value)}  placeholder='Enter the Word'/><br/><br />
           <button onClick={getwordquote} >Get Quote</button>
           
          </div>
           <div className='quote'>
               <div className='writeup'>
                   {quotes}

               </div>
             
           </div>
           

           </center></div>
           <button id="next" onClick={next}>Next</button>
           <h2 id="qs">Quote Search By Word</h2>
    </div>
  );
}

export default Wordquote;
