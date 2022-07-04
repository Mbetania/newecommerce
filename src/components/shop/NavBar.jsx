import React from 'react'
import {BsCart2} from 'react-icons/bs'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const NavBar = () => {
return (
    <>
        <BsCart2/>
        <ul>
            <NavLink to='/'>inicio</NavLink>
            <Link to='/shop'>section 1</Link>
            <Link to='/producto'>section 2</Link>
            <Link to='/section/3'>section 3</Link>
        </ul>
        <Outlet/>
    </>
)
}
