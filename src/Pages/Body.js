import React from 'react';
import { Link } from 'react-router-dom';
import Data from './AllData';
import BlackCard from '../Components/Black_Card';
import Navigation from '../Components/Navibar';
import Head_L from '../Components/Head_Link';

function Home() {
    return (
        <>
            <Navigation/>
            <div className="container">
                <Head_L/>
                <div className="all__data__items">
                    <div className="data__items">
                        <Data />
                    </div>
                    <div className="rooms__container">
                        <BlackCard/>
                    </div>
                </div>

            </div>
        </>

        );
}

export default Home;


