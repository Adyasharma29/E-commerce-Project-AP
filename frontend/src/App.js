import React from 'react';
import logo from './logo.svg';
import data from './data';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Homescreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen'

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
<BrowserRouter>
    <div className="container-grid">
            <header className="header">
                <div className="brandname">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/" >tronix</Link>
                </div>
                <div className="header_links">
                    <a href="wishlist.html">Wishlist</a>&nbsp;
                    <a href="mycart.html">My Cart</a>&nbsp;
                    <a href="register.html">Register</a>&nbsp;
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
                    <Route path ="/product/:id" component={ProductScreen} />
                    <Route path="/" exact={true} component={Homescreen} />
                  
                </div>
                
            </main>
            <footer className="footer">
                Created 2020.
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
