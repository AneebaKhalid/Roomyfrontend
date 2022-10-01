import React from 'react';
import { Link } from 'react-router-dom';

function Head_Link() {
    return (
        <div className="header">
            <div className='header__link'>
                <Link to='/'>
                    <span>Rooms Available</span>
                </Link>
            </div>

        </div>
        );
}

export default Head_Link;