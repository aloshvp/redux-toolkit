import './App.css'
import Counter from './features/counter/Counter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: < Counter />,
    path: "/"
  },
  {
    path: "/post",
    element: ""
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider  >

  )
}

export default App
