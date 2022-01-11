import React, { useState, useEffect } from 'react'
import './Navbar.css'
function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }

        });

    }, []);

    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <img
                className='navbar_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo" />

            <img
                className="navbar_avatar"
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                alt="avatar" />

        </div>
    )
}

export default Navbar
