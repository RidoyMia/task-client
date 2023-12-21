import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import Home from './components/pages/Home/Home.jsx'
import Login from './components/pages/Login/Login.jsx'
import Registration from './components/pages/Registration/Registration.jsx'
import AuthProvider from './components/Provider/AuthContext.jsx'
import Choose from './components/Shared/Choose/Choose.jsx'
import DashboardLaout from './components/Layout/DashboardLayout.jsx'
import Alltask from './components/pages/Dashboard/AllTask/Alltask.jsx'
import AddTask from './components/pages/Dashboard/AddTask/AddTask.jsx'
import Update from './components/pages/Dashboard/Update/Update.jsx'
import AuthRoute from './components/Shared/AuthRoute/AuthRoute.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },{
        path : '/login',
        element : <Login></Login>
      },{
        path : '/register',
        element : <Registration></Registration>
      },{
        path : '/who',
        element : <AuthRoute><Choose></Choose></AuthRoute>
      }
    ]
  },
  {
    path : 'dashboard',
    element : <AuthRoute><DashboardLaout></DashboardLaout></AuthRoute>,
    children : [
      {
        path : '/dashboard',
        element : <AuthRoute><Alltask></Alltask></AuthRoute>
      },{
        path : 'added',
        element : <AuthRoute><AddTask></AddTask></AuthRoute>
      },{
        path : 'updated/:id',
        element :<AuthRoute> <Update></Update></AuthRoute>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}>
      <App />
   </RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
