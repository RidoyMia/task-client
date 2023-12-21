import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./Dashboard.css"
import { authContext } from '../Provider/AuthContext';

const DashboardLaout = () => {
  const { user } = useContext(authContext);
  console.log(user, 'fdd');
  return (
    <div>
      <div className=' grid grid-cols-3 lg:grid-cols-5 md:grid-cols-5 '>
        <div className=' col-span-0  bg-green-800 text-black'>
          <div className='flex justify-center items-center align-middle mb-10'>
            <img src={user?.photoURL} className='w-24 h-24 rounded-full'></img>
          </div>
          <u id='sidebarr'>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink><br></br>
            <NavLink
              to="/dashboard/added"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              AddTask
            </NavLink>
          </u>
        </div>
        <div className='col-span-2 lg:col-span-4 md:col-span-4 bg-white'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLaout;