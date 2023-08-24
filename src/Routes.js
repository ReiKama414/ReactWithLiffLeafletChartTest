import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import LeafletMap from './pages/LeafletMap';
import Chart from './pages/Chart';
import NotFound from './pages/NotFound';

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
        path: '*',
        element: <NotFound />,
    },
];

function Router() {
    const routing = useRoutes(routes);

    return routing;
}

export default Router;
