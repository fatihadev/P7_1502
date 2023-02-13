import logo from '../assets/Group.webp';
import '../style/header.css';
import React from 'react';
import { NavLink } from "react-router-dom";

 export default function Header() {
    return (
        <>
            <nav className='navbar'>
                <div className='kasa'>
                    <p className='K'>K</p>
                    <img className='logo' src={logo} alt='logo'></img>
                    <p className='SA'>s</p>
                    <p className='SA'>a</p>
                </div>
                <div>
                    <ul className='links'>
                        <li className='link1'><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                        <li className='link2'><NavLink to="/apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>
                    </ul>
                </div>
            </nav>
        
        </>
    )
}