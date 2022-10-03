import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Navigation from './Components/Navibar';
import Home from './Pages/Body';
import SignIn from './Pages/SignIn';
import AllBookings from './Pages/All_Bookings';
import AllRooms from './Pages/All_Rooms';
import AvailRooms from './Pages/Available_Rooms';
import HomeData from './Pages/AllData';
import Calender_Manage from './Pages/Calender_Manage';
import './App.css';

function App() {
  return (
    <div className="App">
          
              <Router>
                  <Routes>

                  <Route path="/" element={<SignIn />}></Route>
                  <Route path="/allbookings" element={<AllBookings />}></Route>
                  <Route path="/allrooms" element={<AllRooms />}></Route>
                  <Route path="/b" element={<HomeData />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/availRoom" element={<AvailRooms />}></Route>
                  <Route path="/calMang" element={<Calender_Manage />}></Route>
                  </Routes>
              </Router>
          
          
    </div>
  );
}

export default App;
