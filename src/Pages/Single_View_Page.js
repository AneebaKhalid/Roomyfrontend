import React, { useState } from 'react';
import Navigation from '../Components/Navibar';
import Search from '../Components/SearchBar';
import Head_L from '../Components/Head_Link';
import View from '../Components/Single_View';



function Single_User() {


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
                                    <h3>User Profile</h3>
                                </div>
                               
                            </div>
                            <div>
                                <View/>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Single_User;

