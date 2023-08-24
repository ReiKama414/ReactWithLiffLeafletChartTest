// npm install node-sass
// npm install react-router-dom
// npm install bootstrap
// npm install react-bootstrap
// npm install react-router-bootstrap
// npm install classnames
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './utils/DataContext';
import Router from './Routes';
import Navbar from './components/Header/Header';
import './app.sass';

const App = () => {
    return (
        <BrowserRouter basename="/ReactWithLiffLeafletChartTest">
            <Navbar />
            <DataProvider>
                <Router />
            </DataProvider>
        </BrowserRouter>
    );
};

export default App;
