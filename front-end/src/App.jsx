import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlesPage from './pages/ArticlesPage'
import { Children } from 'react'
import Layout from './Layout'

const routes = [{
  path: '/',
  element: <Layout />,
  Children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/articles-list',
      element: <ArticlesListPage />
    },
    {
      path: '/articles/individual',
      element: <ArticlesPage />
    }]
}]


const router = createBrowserRouter(routes)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
