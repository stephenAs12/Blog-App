import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlesPage from './pages/ArticlesPage'
import Layout from './Layout'
import PageNotFound from './pages/PageNotFound'

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <PageNotFound />,
  children: [{
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
      path: '/articles-list/:name',
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
