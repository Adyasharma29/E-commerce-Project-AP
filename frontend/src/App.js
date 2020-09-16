import React from 'react';
import logo from './logo.svg';
import data from './data';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="container-grid">
            <header className="header">
                <div className="brandname">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href="index.html">tronix</a>
                </div>
                <div className="header_links">
                    <a href="wishlist.html">Wishlist </a>
                    <a href="mycart.html">My Cart </a>
                    <a href="register.html">Register </a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Categories</h3>
                <button className="close_button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Laptops</a>
                    </li>
                    <li>
                        <a href="index.html">Desktops</a>
                    </li>
                    <li>
                        <a href="index.html">Mobiles</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="products">
                   {
                       data.products.map(product =>
                     
                    <li> 
                        <div className="product1">
                            <img className="product_image" src={product.image} alt="product1" />
                            <div className="product_name">
                                <a href="product.html">{product.name}</a>
                            </div>
                            <div className="product_brand">{product.brand}</div>
                            <div className="product_price">₹{product.price}</div>
                            <div className="product_rating">{product.rating} Stars ({product.numReviews} Reviews) </div>
                        </div>
                    </li>)
}

                
                </div>
                
            </main>
            <footer className="footer">
                Created 2020.
            </footer>
        </div>
  );
}

export default App;
