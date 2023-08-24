import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import LeafletMap from './pages/LeafletMap';
import Chart from './pages/Chart';
import NotFound from './pages/NotFound';

function Router(userProfile) {
    const routes = [
        {
            path: '/',
            element: <Home userProfile={userProfile} />,
        },
        {
            path: '/leafletMap',
            element: <LeafletMap userProfile={userProfile} />,
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

    const routing = useRoutes(routes);

    return routing;
}

export default Router;
