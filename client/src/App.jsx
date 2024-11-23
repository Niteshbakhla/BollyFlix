
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './components/custom/Footer'
import Navbar from './components/custom/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Adminnavbar from './components/custom/Adminnavbar'
import { Provider, useDispatch } from "react-redux";
import { store } from "./../stores/store"



function App() {

 
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Homepage />
          <Footer />
        </>
      )
    },
    {
      path: "/admin/login",
      element: (
        <>
          <Login />
        </>
      )
    },
    {
      path: "/admin/dashboard",
      element: (
        <>
          <Adminnavbar />
          <Dashboard />
        </>
      )
    }
  ])


  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
}

export default App
