import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink className="mr-4" to="/">Home</NavLink>
            <NavLink to="login">Login</NavLink>
        </div>
    );
};

export default Header;