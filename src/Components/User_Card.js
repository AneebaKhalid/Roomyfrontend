import React, { useState } from 'react';
import { Link } from 'react-router-dom'


function User_card(props) {
    return (
        <>
            <div className="movie" id={props.user.id}>
                <div>
                    <p>{props.user.name}</p>
                    <hr/>
                    <h3>{props.user.title}</h3>
                </div>
                <div>
                    <span>{props.user.office}</span>
                    <p>{props.user.email}</p>
                    <p>{props.user.city}</p>
                </div>
                <div>
                    <img className="cellImg" src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="avatar"/>
                </div>
                <Link to='/users/single'> View </Link>
              




            </div>
        </>
        );
}

export default User_card;