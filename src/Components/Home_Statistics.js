import { CircularProgress } from '@mui/material';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

function Statistic_Cards() {
    return (
        <div className="second__body">
            
            <div className="second_body_left">
                <div className="small_white_card">
                    <h3>6</h3>
                    <p>Raume in Bearbeitung</p>
                </div>
                <div className="small_white_card">
                    <h3>6</h3>
                    <p>Booking Management</p>
                </div>
                <div className="small_white_card_L">
                    <h3>17</h3>
                    <p>Manage your bookings in a Calender</p>
                </div>
            </div>
            <div className="second_body_right">
              
                <div className="office_statistics">
                    <div className="statistic_card_office">
                        <h3>Office Name</h3>
                        <p>Rooms: 2/10</p>
                    </div>

                    <CircularProgressbar className="progress_bar" value={20} text={'20%'} />
                </div>
                <div className="office_statistics">
                    <div className="statistic_card_office">
                        <h3>Office Name</h3>
                        <p>Rooms: 2/10</p>
                    </div>

                    <CircularProgressbar className="progress_bar" value={20} text={'20%'} />
                </div>

            </div>

        </div>
        );
}

export default Statistic_Cards;