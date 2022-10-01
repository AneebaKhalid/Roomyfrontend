import React from 'react';
import { Link } from 'react-router-dom';
import * as BiIcons from "react-icons/bi";
import Navigation from '../Components/Navibar';
import Search from '../Components/SearchBar';

function AllData() {
    return (
        <>
            <div className="white__page">
                <div className="name__search__body">
                    <div className="name">
                        <h3>Welcome back</h3>
                        <p>Your doing great this week! keep it up.</p>
                    </div>
                    <Search/>

                </div>
                <div className="second__body"> Body2</div>
                <div className="third__body"> Body3</div>
            </div>
        </>


        );
}

export default AllData;