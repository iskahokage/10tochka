import React from 'react';
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <header className='header'>
            <div className='header_logo'>
                <p>10Tochka</p>
            </div>
            <nav className='header_nav'>
                <ul className='header_nav_list'>
                    <li>
                        <NavLink to = "#">О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to = "#">Продукты</NavLink>
                    </li>
                    <li>
                        <NavLink to = "#">Рецепты</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;