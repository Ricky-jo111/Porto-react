import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
    <nav>
        <div class="content">
            <div class="logo">
                R.j
            </div>
            <div class="navitem">
                <ul>
                    <li><Link className="link" to={"/"}>Home</Link></li>
                    <li><Link className="link" to={"/about"}>about</Link></li>
                    <li><Link className="link" to={"/portofolio"}>Portofolio</Link></li>
                    <li><Link className="link" to={"/Blog"}>Blog</Link></li>
        
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar