import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function Homescreen (props) {
    return <ul className="products">
    {
        data.products.map(product =>
      
     <li> 
         <div className="product1">
         <Link to={'/product/' + product._id}><img className="product_image" src={product.image} alt="product1" /></Link>
             <div className="product_name">
                 <Link to={'/product/' + product._id}>{product.name}</Link>
             </div>
             <div className="product_brand">{product.brand}</div>
             <div className="product_price">₹{product.price}</div>
             <div className="product_rating">{product.rating} Stars ({product.numReviews} Reviews) </div>
         </div>
     </li>)
}

 </ul>
}

export default Homescreen;
