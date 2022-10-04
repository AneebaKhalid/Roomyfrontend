import React, { useState } from 'react';
import User_Card from '../Components/User_Card';
import Navigation from '../Components/Navibar';
import Search from '../Components/SearchBar';
import Head_L from '../Components/Head_Link';

function All_Users() {

    const users = [
        { id: 1, name: 'Jane Doe', office: 'Head Office', title: 'CEO', email: 'abc@gvx.com', city: 'Nuemberg' },
        { id: 3, name: "Anna Lena", office: "Head Office", title: "Developer", email: "abc@gvx.com", city: "Nuemberg" },
        { id: 2, name: "John Snoe", office: "HR Dept", title: "Project Manager", email: "abc@gvx.com", city: "Nuemberg" },
        { id: 4, name: "Alina Dow", office: "Warehouse", title: "Project Manager", email: "abc@gvx.com", city: "Munchen" }

    ];

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
                                    <h3>Our Communty</h3>
                                </div>
                                <Search />
                            </div>
                            <div className="movie_grid">
                                {users.map((user) => {
                                    return (<User_Card user={ user} />);
                                    
                                })}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
        );
}

export default All_Users;