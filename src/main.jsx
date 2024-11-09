import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

// Ensure that 'root' exists in your HTML file (index.html)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create root using React 18's createRoot method

root.render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);
