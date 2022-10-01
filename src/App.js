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
import Page from './Pages/AllData';
import './App.css';

function App() {
  return (
    <div className="App">
          
              <Router>
                  <Routes>

                  <Route path="/" element={<SignIn />}></Route>
                  <Route path="/allbookings" element={<AllBookings />}></Route>
                  <Route path="/allrooms" element={<AllRooms />}></Route>
                  <Route path="/b" element={<Page />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  </Routes>
              </Router>
          
          
    </div>
  );
}

export default App;
