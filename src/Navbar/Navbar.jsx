import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [clicked, setClicked] = useState(false); // State to toggle the navbar visibility

    const handleClick = () => {
        setClicked(prevClicked => !prevClicked); // Toggle the state for showing/hiding the navbar
    };

    return (
        <nav className="nav flex items-center justify-between p-4 bg-teal-300">
            <a href="index.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="40" height="40" className='color'>
                    <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1 96 192c0 53 43 96 96 96s96-43 96-96l0-120.9-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1L352 192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112l0-70.7c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 70.7c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192L32 71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
            </a>

            <div>
                <ul id="navbar" className={clicked ? "active" : ""}>
                    <li className='hover:text-orange-800'>
                        <a href="/home">Home</a>
                    </li>
                    <li className='hover:text-orange-800'>
                        <a href="/about">About</a>
                    </li>
                    <li className='hover:text-orange-800'>
                        <a href="/book">Book My Appointment</a>
                    </li>
                    <li className='hover:text-orange-800'>
                        <a href="/contactus">Contact</a>
                    </li>
                </ul>
            </div>

            {/* Hamburger menu */}
            <div className={`mobile ${clicked ? 'active' : ''}`} onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    );
}

export default Navbar;