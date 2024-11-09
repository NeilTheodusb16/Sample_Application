
import Contactus from './ContactUs/Contactus';
import Home from './Home/home';
import About from './About/About';
import Book from './Book/Book';
const routes = [
    {
        path: '/contactus',
        element: <Contactus />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/book',
        element: <Book />
    }
];

export default routes;
