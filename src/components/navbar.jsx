import React, { useEffect, useState } from "react";
import "./../styles/navbar.scss";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/toapp">ToApp</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;