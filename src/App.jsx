import './App.css'
import Counter from './features/counter/Counter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './features/post/PostList'

const router = createBrowserRouter([
  {
    path: "/",
    element: < Counter />
  },
  {
    path: "/posts",
    element: <PostList />
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider  >

  )
}

export default App
