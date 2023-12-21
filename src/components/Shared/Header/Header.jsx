import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"
import { authContext } from '../../Provider/AuthContext';
const Header = () => {
  const navigate = useNavigate()
  const {user,setUser,createUser,loading,setLoading,googleLogin,signIn,logOut,updateProfileData} = useContext(authContext)
  console.log(user,'form header');
  const logouthandler =()=>{
    logOut();
    navigate('/')
  }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul id="sidebar" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
<NavLink
  to="/who"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  For whoose
</NavLink>
{
  user? <button className='py-1 px-3 bg-green-600 text-white rounded-lg' onClick={logouthandler}>Logout</button> : <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink> 
} 
<br></br>
{
  user ?  <img src={user?.photoURL} className='w-10 h-10  rounded-full'></img> : ''
}
{
  user ? <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Dashboard
</NavLink> : ""
}
      </ul>
    </div>
    <a className=" font-semibold uppercase text-xl">OwnSystemm</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul id="sidebar" className="menu menu-horizontal px-1">
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
<NavLink
  to="/who"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  For whoose
</NavLink>
{
  user? <button className='py-1 px-3 bg-green-600 text-white rounded-lg' onClick={logouthandler}>Logout</button> : <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink> 
} 
<br></br>
{
  user ?  <img src={user?.photoURL} className='w-10 h-10  rounded-full'></img> : ''
}
{
  user ? <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Dashboard
</NavLink> : ""
}

    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Header;