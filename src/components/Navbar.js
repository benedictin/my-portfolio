import React from "react"
import '../styles/Navbar.css'
import { Link } from "react-router-dom"
import { useState } from "react";

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <header className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon"  htmlFor ='menu-btn'><span className="navicon"></span></label>
            <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                <Link className="navigation-link">
                    Project
                </Link>
                <Link className="navigation-link">
                    A propos de moi
                </Link>
                <Link className="navigation-link">
                    Contact
                </Link>
            </ul>
        </header>
        
    )
}