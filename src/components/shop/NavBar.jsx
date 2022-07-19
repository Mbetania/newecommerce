import React from 'react'
import {BsCart2} from 'react-icons/bs'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const NavBar = () => {
return (
    <>
        <BsCart2/>
        <ul className="nav nav-tabs">
            <Link className="nav-item nav-link active" to='/'>inicio</Link>
            <Link className="nav-item nav-link active" to='/shop'>calculadora</Link>
            <Link className="nav-item nav-link active" to='/detail'>rick and morty</Link>
            <Link className="nav-item nav-link active" to='/category'>random cards</Link>
        </ul>
        <Outlet/>
    </>
)
}
