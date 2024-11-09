import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/home.jsx';
import Footer from './Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />

    <App />
    <Footer />
  </StrictMode>,
)
