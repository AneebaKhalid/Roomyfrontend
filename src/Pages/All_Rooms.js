import React from 'react';
import Navigation from '../Components/Navibar';
import Search from '../Components/SearchBar';
import Head_L from '../Components/Head_Link';
import DataTable from '../Components/Datatable_User';


function AllRooms() {
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
                                    <h3>All Rooms</h3>
                                </div>
                                <Search />
                            </div>
                            <div className="Data__rows">
                                <DataTable/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );

}

export default AllRooms;