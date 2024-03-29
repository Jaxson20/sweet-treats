import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound.jsx'
import Christmas from './pages/Christmas';
import Valentines from './pages/Valentines';
import Aboutme from './pages/Aboutme';
import Ingredients from './pages/Ingredients';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/Christmas',
        element: <Christmas />
      },
      {
        path: '/Valentines',
        element: <Valentines />
      },
      {
        path: '/Aboutme',
        element: <Aboutme />
      },
      {
        path: '/Ingredients',
        element: <Ingredients />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
