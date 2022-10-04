import React from 'react';
import { Link } from 'react-router-dom';
import * as faIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from "react-icons/bi";

function Navigation() {
    const SidebarData = [
        {
            title: 'Home',
            path: '/home',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
        },
        
        {
            title: 'Bookings',
            path: '/allbookings',
            icon: <BiIcons.BiBarChartSquare />,
            cName: 'nav-text'
        },
        {
            title: 'All Rooms',
            path: '/allrooms',
            icon: <AiIcons.AiOutlinePlayCircle />,
            cName: 'nav-text'
        },
        {
            title: 'Community',
            path: '/users',
            icon: <faIcons.FaUsers />,
            cName: 'nav-text'
        },
    ];
    return (
        <div className="left">
            <div className='Sidebar'>
                <h1> Roomy</h1>

                <nav className='nav-menu'>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} className='sidebar__menu__icon'>
                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>

                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;