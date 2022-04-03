import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to='/dashboard'>
                Home
            </NavLink>
            <NavLink to='/games'>
                GAmes
            </NavLink>
            <NavLink to='/library'>
                Library
            </NavLink>
            <NavLink to='/learn'>
                Learn
            </NavLink>
        </nav>
    )
}

export default Nav;