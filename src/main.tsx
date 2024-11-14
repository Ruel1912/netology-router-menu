import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import DriftPage from './pages/Drift'
import TimeAttackPage from './pages/TimeAttack'
import ForzaPage from './pages/Forza'
import Root from './pages/Root'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/drift',
          element: <DriftPage />,
        },
        {
          path: '/timeattack',
          element: <TimeAttackPage />,
        },
        {
          path: '/forza',
          element: <ForzaPage />,
        },
      ],
    },
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
