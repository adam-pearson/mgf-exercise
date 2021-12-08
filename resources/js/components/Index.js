import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Navbar';

import Home from './Home';
import Edit from './data/Edit';

function Index() {
    return (
        <div className="container">
            <NavBar />    
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/edit/:id" element={ <Edit /> } />
                {/* <Route exact path="/add" element={ <About /> } />
                <Route exact path="/report" element={ <Contact /> } /> */}
            </Routes>
        </div>
    );
}

export default Index;
