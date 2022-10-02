import React from 'react';
import { Link } from 'react-router-dom';
import * as BiIcons from "react-icons/bi";
import Navigation from '../Components/Navibar';
import Search from '../Components/SearchBar';
import ThirdBody from '../Components/Home_Manage_Card';
import SecondBody from '../Components/Home_Statistics';


function AllData() {
    return (
        <>
            <div className="white__page">
                <div className="name__search__body">
                    <div className="name">
                        <h2>Welcome back</h2>
                        <p>Your doing great this week! keep it up.</p>
                    </div>
                    <Search/>

                </div>
                <div>
                    <h3>Statistics</h3>
                    <SecondBody/>
                </div>
                <div>
                    <h3>Your Events</h3>
                    <ThirdBody/>
                </div>
            </div>
        </>


        );
}

export default AllData;