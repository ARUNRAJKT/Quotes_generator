import '../products/products.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar';
import Pro from './component/pro';


function Products() {
    const [product,setProducts]=useState([]);
    const [url,seturl]=useState(" https://maitexa.com/Client_Demo/ecommerce_app_admin/public/uploads/products/")
    const getProducts=()=>{
    axios.post(`https://maitexa.com/Client_Demo/ecommerce_app_admin/api/list-products`)
    .then((response)=>{
        console.log(response)
        const details=response.data.products;
        console.log(details)
        setProducts(details)      
    });    
}
console.log(product)
  return (
    <div className='main'> 
      <Navbar/>
      <div className="container"><center>
       <div className='content'>
         
       <h1 id='protitle'>PRODUCTS</h1>
       <button onClick={getProducts}>View all</button><br /><br /><br /><br /><br /><br /><br /><br />

       <div className="row">
      
              
             {product.map(products=>
           <div id="prodiv" className='col-lg-2'>
                 <div className="details">
                     <div className="name">
                          <br />
                         <img id="pimage" src={url+products.product_image} alt="" /><br />
                         <h4  id='pt'> Rate : {products.product_price}rs</h4> 
                         Name :{products.product_name} <br /><br />
                        <div id='des'>{products.product_description}</div> 
                     </div>
                 </div>
                </div>    
                )}   
        
         
        </div>
        </div>
        </center> </div>
           
    </div>
  );
}

export default Products;