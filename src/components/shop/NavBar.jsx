import React from 'react'
import {BsCart2} from 'react-icons/bs'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const NavBar = () => {
return (
    <>
        <BsCart2/>
        <ul className="nav nav-tabs">
            <Link class="nav-item nav-link active" to='/'>inicio</Link>
            <Link class="nav-item nav-link active" to='/shop'>section 1</Link>
            <Link class="nav-item nav-link active" to='/producto'>section 2</Link>
            <Link class="nav-item nav-link active" to='/section/3'>section 3</Link>
        </ul>
        <Outlet/>
    </>
)
}
