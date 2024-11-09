
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; // Import the Navbar
import routes from './router'; // Adjust the path to your routes file
import './app.css'
import Home from './Home/home';
import React, { useEffect } from 'react';

function App() {
    
    const phoneNumber = '1234567890'; // Replace with the target phone number
    const message = 'Hello! I would like to chat.'; // Optional message to pre-fill
    const whatsappUrl = `https://wa.me/${8886244299}?text=${encodeURIComponent(message)}`;
    useEffect(() => {
        window.location.pathname === '/' && (window.location.pathname = '/home');
    }, []); 

    return (
      <>
{/*       <Home /> */}


        <Router>
           <main>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </main>
        </Router>
        <div ><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
        <i className="customicon fa-brands fa-whatsapp"></i>
        </a>
        </div>
        </>
    );
}

export default App;
