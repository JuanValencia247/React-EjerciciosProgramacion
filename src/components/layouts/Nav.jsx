import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from './Header'

export const Nav = () => {
    return (
        <>
            <Header />
            <nav className="nav">
                <div className="nav__logo">
                    <h2 className="nav__logo-jc">JC</h2>
                </div>
                <ul className="nav__ul">
                    <li className="nav__ul-li">
                        <NavLink className="nav__ul-li-a" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav__ul-li">
                        <NavLink className="nav__ul-li-a" to="/ejercicios">Ejercicios</NavLink>
                    </li>

                </ul>
            </nav>
        </>

    )
}

