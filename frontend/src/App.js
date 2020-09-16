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
<<<<<<< HEAD
                    <a href="wishlist.html">Wishlist</a>
                    <a href="mycart.html">My Cart</a>
                    <a href="register.html">Register</a>
=======
                    <a href="wishlist.html">Wishlist </a>
                    <a href="mycart.html">My Cart </a>
                    <a href="register.html">Register </a>
>>>>>>> branch1-post-reactport
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
<<<<<<< HEAD
                <div className="content">
                   <ul className="products">
                    <li> 
                        <div className="product1">
                            <img className="product_image" src="/images/d1.jpg" alt="product1" />
                            <div className="product_name">
                                <a href="product.html">MacBook Air (8GB RAM, 256GB SSD Storage) - Space Gray</a>
                            </div>
                            <div className="product_brand">Apple</div>
                            <div className="product_price">₹70,000</div>
                            <div className="product_rating">5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li> 
                        <div className="product1">
                            <img className="product_image" src="/images/d1.jpg" alt="product1" />
                            <div className="product_name">
                                <a href="product.html">MacBook Air (8GB RAM, 256GB SSD Storage) - Space Gray</a>
                            </div>
                            <div className="product_brand">Apple</div>
                            <div className="product_price">₹70,000</div>
                            <div className="product_rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li> 
                        <div className="product1">
                            <img className="product_image" src="/images/d1.jpg" alt="product1" />
                            <div className="product_name">
                                <a href="product.html">MacBook Air (8GB RAM, 256GB SSD Storage) - Space Gray</a>
                            </div>
                            <div className="product_brand">Apple</div>
                            <div className="product_price">₹70,000</div>
                            <div className="product_rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                </ul> 
=======
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

                
>>>>>>> branch1-post-reactport
                </div>
                
            </main>
            <footer className="footer">
                Created 2020.
            </footer>
        </div>
  );
}

export default App;
