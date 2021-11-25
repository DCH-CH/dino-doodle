import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ activeView }) => {

    return (

        <div style={{width:'100%'}}>
            <div className="container-fluid">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to="/" className={`nav-link ${activeView.home}`} aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${activeView.about}`} to="/dino">Dino Doodle</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${activeView.dino}`} to="/about">About</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

            {/* //Routers
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dino" component={Dino} /> */}
        </div>
    )
};

export default Header;