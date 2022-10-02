import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io";

function ThirdBody() {
    return (
        <div className="third__body">
            <div className="card__manage">
                <div className="black__card__manage">
                    <h4>Book a Room</h4>
                    <p>Book a room for this week</p>
                    <Link className="add_icon"><IoIcons.IoIosAddCircleOutline /></Link>
                    <Link className="arrow">
                        <AiIcons.AiOutlineArrowRight />
                    </Link>
                </div>
            </div>
            <div className="card__manage">
                <div className="black__card__manage">
                    <h4>Manage your Bookings</h4>
                    <p>Booking Management.</p>
                    <Link className="arrow">
                        <AiIcons.AiOutlineArrowRight />
                    </Link>
                </div>
            </div>
            <div className="card__manage">
                <div className="black__card__manage">
                    <h4>Calender</h4>
                    <p>Manage your Bookings on Calender</p>

                    <Link className="arrow">
                        <AiIcons.AiOutlineArrowRight />
                    </Link>
                </div>
            </div>

        </div>
    );

}

export default ThirdBody;