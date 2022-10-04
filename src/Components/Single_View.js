import React, { useState } from 'react';
import { Edit, Delete } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

function View(props) {
    const rows = [
        { id: 1, roomNum: 'A1', officeName: 'Head Office', city: 'Munchen', date: '12.11.2022', time: '12:56' },
        { id: 2, roomNum: 'A1', officeName: 'Head Office', city: 'Munchen', date: '12.11.2022', time: '12:56' },
        { id: 3, roomNum: 'A1', officeName: 'Head Office', city: 'Munchen', date: '12.11.2022', time: '12:56' }
    ];
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'roomNum', headerName: 'Room', width: 130 },
        { field: 'officeName', headerName: 'Office Name', width: 170 },
        { field: 'city', headerName: 'City', width: 120 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'time', headerName: 'Time', width: 120 },
    ];
    return (
        <>
            <div className="view">
                <div className="left_titles">
                    <h1>John Dow </h1><hr />
                    <p>Job Title: Dveloper</p>
                    <p>Office Branch: HR</p>
                    <p>City: Berlin</p>
                    <p>Email ID: abc@hgzu.com</p><hr />

                </div>
                <div>
                    <img className="cellImgProfile" src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />

                    <div className="crud">
                        <Edit />
                        <Delete />
                    </div>

                </div>
            </div>
            <div className="datatable">
                <h2>Bookings</h2>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                />
            </div>
        </>

        );
}

export default View;