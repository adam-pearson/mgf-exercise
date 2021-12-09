import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">MGF Exercise</Link>
                <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Add New Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>

            
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="nav flex-column">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Add New Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Navbar
