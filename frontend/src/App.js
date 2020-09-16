import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div class="container-grid">
            <header class="header">
                <div class="brandname">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href="index.html">tronix</a>
                </div>
                <div class="header_links">
                    <a href="wishlist.html">Wishlist</a>
                    <a href="mycart.html">My Cart</a>
                    <a href="register.html">Register</a>
                </div>
            </header>
            <aside class="sidebar">
                <h3>Categories</h3>
                <button class="close_button" onClick={closeMenu}>x</button>
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
            <main class="main">
                <div class="content">
                   <ul class="products">
                    <li> 
                        <div class="product1">
                            <img class="product_image" src="/images/d1.jpg" alt="product1" />
                            <div class="product_name">
                                <a href="product.html">MacBook Air (8GB RAM, 256GB SSD Storage) - Space Gray</a>
                            </div>
                            <div class="product_brand">Apple</div>
                            <div class="product_price">₹70,000</div>
                            <div class="product_rating">5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li> 
                        <div class="product1">
                            <img class="product_image" src="/images/d1.jpg" alt="product1" />
                            <div class="product_name">
                                <a href="product.html">MacBook Air (8GB RAM, 256GB SSD Storage) - Space Gray</a>
                            </div>
                            <div class="product_brand">Apple</div>
                            <div class="product_price">₹70,000</div>
                            <div class="product_rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li> 
                        <div class="product1">
                            <img class="product_image" src="/images/d1.jpg" alt="product1" />
                            <div class="product_name">
                                <a href="product.html">MacBook Air (8GB RAM, 256GB SSD Storage) - Space Gray</a>
                            </div>
                            <div class="product_brand">Apple</div>
                            <div class="product_price">₹70,000</div>
                            <div class="product_rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                </ul> 
                </div>
                
            </main>
            <footer class="footer">
                Created 2020.
            </footer>
        </div>
  );
}

export default App;
