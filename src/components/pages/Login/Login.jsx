import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthContext';

const Login = () => {
    const navigate = useNavigate()
    const {user,setUser,createUser,loading,setLoading,googleLogin,signIn,logOut,updateProfileData,githubLogin} = useContext(authContext)
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password).then(res => {
            if(res){
                navigate('/dashboard')
            }
        }).catch(e =>{
            console.log(e);
        })

    }
    const handleGoole = ()=>{
        googleLogin().then(res=>{
            
            if(res){
                navigate('/dashboard')
            }
        })
    }
    const handleGithub = ()=>{
        githubLogin().then(res=>{
            
            if(res){
                navigate('/dashboard')
            }
        })
    }
    if(loading){
        return <div className='flex justify-center items-center align-middle py-20'>
            <h1>Loading...</h1>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div></div>
                <div className=' shadow-2xl py-5 px-3'>
                    <form onSubmit={handleLogin}>
                        <div>
                            <input type='email' placeholder='email' name='email' className=' px-5  rounded-lg w-full py-4 my-5 outline-none'></input>
                            <input type='password' placeholder='password' name='password' className=' px-5  rounded-lg w-full py-4 my-5 outline-none'></input>

                            <div className='flex justify-center items-center align-middle'>

                                <button className='py-2 px-10  bg-green-700 text-white rounded-md mt-3'>Login</button>
                            </div>

                        </div>
                    </form>
                    <div className='flex justify-center my-3 items-center'>
                        <Link className=' underline' to="/register">Please signup</Link>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        
                        <div className="divider">OR</div>
                       
                    </div>
                  <div className=' flex justify-center'>
                  <button className='py-2 px-10 bg-green-700 text-white rounded-lg' onClick={handleGoole}>Google</button>
                  </div>
                  <div className=' flex justify-center mt-3'>
                  <button className='py-2 px-10 bg-green-700 text-white rounded-lg' onClick={handleGithub}>Github</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;