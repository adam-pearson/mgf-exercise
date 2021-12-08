import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Navbar';

import Home from './Home';


function Index() {
    return (
        <div>
            <NavBar />    
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                {/* <Route exact path="/edit/:id" element={ <Edit /> } />
                <Route exact path="/about" element={ <About /> } />
                <Route exact path="/contact" element={ <Contact /> } /> */}
            </Routes>
        </div>
    );
}

export default Index;
