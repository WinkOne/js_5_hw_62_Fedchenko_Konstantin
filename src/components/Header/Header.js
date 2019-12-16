import React from 'react';
import './Header.css'
import Button from "../UI/Button/Button";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand nav-logo" href="#">One.<span className='Night'>Night</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {<Button
                                class={'btn btn-secondary ' + props.colorDanger1}
                            >
                                <NavLink
                                    className='nav-link'
                                    to={'/'}
                                >
                                    Home
                                </NavLink>
                            </Button>}
                        </li>
                        <li className="nav-item">
                            {<Button
                                class={'btn btn-secondary ' + props.colorDanger2}
                            >
                                <NavLink
                                    className='nav-link'
                                    to={'/AboutUs'}
                                >
                                    About us
                                </NavLink>
                            </Button>}
                        </li>
                        <li className="nav-item">
                            {<Button
                                class={'btn btn-secondary ' + props.colorDanger3}
                            >
                                <NavLink
                                    className='nav-link'
                                    to={'/Contact'}
                                >
                                    Contacts
                                </NavLink>
                            </Button>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;