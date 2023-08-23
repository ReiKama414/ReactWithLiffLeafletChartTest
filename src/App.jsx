// npm install node-sass
// npm install react-router-dom
// npm install bootstrap
// npm install react-bootstrap
// npm install react-router-bootstrap
// npm install classnames
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import Navbar from './components/Navbar/Navbar';
import './app.sass';

const App = () => {
    return (
        <BrowserRouter basename="/ReactWithLiffLeafletChartTest">
            <Navbar />
            <Router />
        </BrowserRouter>
    );
};

export default App;
