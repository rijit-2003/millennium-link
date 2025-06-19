import React from 'react'

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg custom-white-navbar sticky-top"
            style={{ backgroundColor: '#0be8f6' }}
        >


            <div className="container-fluid">
                {/* Logo on the left */}
                <a className="navbar-brand ms-5" href="#">
                    <img
                        src="/favicon.ico"
                        alt="Millennium Link Logo"
                        height="60"
                        width="80"
                        className="d-inline-block align-text-top"
                    />
                </a>

                {/* Toggler for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav items aligned right */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#customers">Customers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
