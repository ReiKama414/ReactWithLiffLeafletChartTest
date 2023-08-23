// npm install node-sass
// npm install react-router-dom
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter basename="/ReactWithLiffLeafletChartTest">
            <Header />
            <Router />
        </BrowserRouter>
    );
};

export default App;
