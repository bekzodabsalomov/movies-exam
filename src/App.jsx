import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'


import MainLayout from './layout/MainLayout'
import Error from './page/Error'
import Home from './page/Home'
import Movie from './page/Movie'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error/>,
      children : [
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/movie/:imdbID",
          element: <Movie/>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App