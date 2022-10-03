import React from 'react';
import Navigation from '../Components/Navibar';
import Search from '../Components/SearchBar';
import Head_L from '../Components/Head_Link';
import Calender from '../Components/Calender';

function Manage_On_Calender() {
    return (
        <>
            <div className="container__all__info">
                <Navigation />
                <div className="container">
                    <Head_L />
                    <div className="all__data__items">

                        <div className="white__page">
                            <div className="name__search__body">
                                <div className="name">
                                    <h3>Manage your Bookings</h3>
                                </div>
                                <Search />
                            </div>
                            <Calender />
                        </div>

                    </div>
                </div>

            </div>

        </>
        );
}

export default Manage_On_Calender;