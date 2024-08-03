import React from 'react';
import '../css/Header.css';
import logo from '../Images/logo.png';

const Header = () => {
    return (
        <header>
            <>
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
                
                <div className= "nav-btn">
                <button><a href="/">Log In</a></button>
                <button><a href="/">Sign Up</a></button>
                </div>
                
            </nav>
            </>
            
        </header>
    );
}

export default Header;