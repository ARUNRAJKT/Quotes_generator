import React from "react";
import "./pro.css"

function Pro(props){
    console.log(props.products+"----------------------------")
    const {
        product_name,
        product_price
    }=props.product
    return (
        <div id="prodiv" className='col-lg-2'> 
           <center>
               <img src="" alt="" />
               <div className="details">
                   <div className="name">
                       {product_name}
                   </div>
               </div>

           </center>    
        </div>
      );
}
export default Pro;