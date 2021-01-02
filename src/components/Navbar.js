import React from 'react';
import {Link} from 'react-router-dom';

 const Navbar = () => {
    return (
        <nav>
            <Link to = '/' className = 'pl-8'>EGG</Link>
            <div className="div px-4 cursor-pointer md:hidden"></div>
        </nav>
    )
}

export default Navbar;