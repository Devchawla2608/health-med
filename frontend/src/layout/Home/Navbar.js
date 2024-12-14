import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../../userContext';
import Reward from "../../patient/Reward";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xxl d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    <img src="assets/img/hearts.png" alt="img" />
                    <h1>TheraMed<span>.</span></h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        {!user && <li><Link to='/' className="links">Home</Link></li>}
                        {user && <li><Link to='/mood-tracking' className="links">Mood Tracking</Link></li>}
                        {user && user.isPatient && <li><Link to='/' className="links">Your Therapist</Link></li>}
                        {user && <li><button
                            style={{ border: 'none', background: 'none' }}
                            data-toggle="modal" data-target="#exampleModal" className="links">Your Points<Reward /></button></li>}
                        {user && user.isPatient && <li><Link to='/register-patient' className="links">Find a Therapist</Link></li>}
                        {user && !user.isPatient && <li><Link to='/patientinfo#portfolio' className="links">Your Patients</Link></li>}
                        {<li><a href="#faq" className="links">FAQ</a></li>}
                        {<li><a href="#recent-posts" className="links">Blog</a></li>}
                        {user && <li><Link to='/' className="links">My Profile</Link></li>}
                        {user && <li><button onClick={() => {
                            setUser(null);
                            localStorage.setItem(
                                "thera-med",
                                JSON.stringify("")
                            );

                        }} style={{ border: 'none', background: 'none' }} className="links">LogOut</button></li>}
                        {!user && <li><Link to='/login' className="links">Login</Link></li>}
                        {!user && <li><Link to='/register' className="links">Sign Up</Link></li>}
                    </ul>
                </nav>

                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

            </div>
        </header>
    )
}

export default Navbar;