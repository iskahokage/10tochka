import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from './../../assets/img/logo.svg';
const Header = () => {
    return (
        <header className='header'>
            <div className='header_logo'>
                <img src={logo} alt="" className='logo' />
                <p>
                    десяточка
                </p>
            </div>
            <nav className='header_nav'>
                <ul className='header_nav_list'>
                    <li>
                        <NavLink to = "#" className='nav_link'>О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/jams" className='nav_link'>Джемы</NavLink>
                    </li>
                    <li>
                        <NavLink to = "#" className='nav_link'>Сгущенка</NavLink>
                    </li>
                    <li>
                        <NavLink to = "#" className='nav_link'>Рецепты</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;