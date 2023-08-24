import { useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LeafletMap from './pages/LeafletMap';
import Chart from './pages/Chart';
import Unauthorized from './pages/HTTP Status/401/Unauthorized';
import Forbidden from './pages/HTTP Status/403/Forbidden';
import NotFound from './pages/HTTP Status/404/NotFound';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/leafletMap',
        element: <LeafletMap />,
    },
    {
        path: '/chart',
        element: <Chart />,
    },
    {
        path: '/401',
        element: <Unauthorized />,
    },
    {
        path: '/403',
        element: <Forbidden />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

function Router() {
    const routing = useRoutes(routes);
    const location = useLocation();

    useEffect(() => {
        const pageTitle = getPageTitle(location.pathname);
        document.title = pageTitle;
    }, [location]);

    const getPageTitle = (path) => {
        switch (path) {
            case '/':
                return "Home | Kama's Demo";
            case '/leafletMap':
                return "Leaflet Map | Kama's Demo";
            case '/chart':
                return "Chart | Kama's Demo";
            case '/401':
                return "401 Unauthorized | Kama's Demo";
            case '/403':
                return "403 Forbidden | Kama's Demo";
            default:
                return "404 Not Found | Kama's Demo";
        }
    };

    return routing;
}

export default Router;
