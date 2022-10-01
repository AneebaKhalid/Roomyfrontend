import React from 'react';
import { Link } from 'react-router-dom';
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

function SignIn() {
    return (
        <div className="signin__page">
            <div className="signin__card">
                <div className="signin_logo">
                    <h1> Roomy </h1>
                </div>
                <div className="signin_content">
                    <p>Username</p>
                    <div className="signin__field">
                        <span><BiIcons.BiUser /></span>
                        <input placeholder="Username" value=''
                        /*onChange={(e) => setSearchTerm(e.target.value)}*/
                        />
                    </div>
                    <p>Password</p>
                    <div className="signin__field">
                        <span><RiIcons.RiLockPasswordLine /></span>
                        <input placeholder="Password" value=''
                        /*onChange={(e) => setSearchTerm(e.target.value)}*/
                        />
                    </div>
                </div>
                <div className="signin_button">
                    <Link to='/home'>
                        <btn className="myButton">
                            <span>Sign In</span>
                        </btn>
                    </Link>
                </div>
                

            </div>
        </div>
    );

}

export default SignIn;

