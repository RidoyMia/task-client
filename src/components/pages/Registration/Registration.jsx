import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthContext';
const api = 'bd0f22832703db189e737da27b90a211'
const Registration = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const {user,setUser,createUser,loading,setLoading,googleLogin,signIn,logOut,updateProfileData,githubLogin} = useContext(authContext)
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    
    console.log(user,'data');
    
    const onSubmit = (data) => {
        const image = data?.photo[0];
        
        const formdata = new FormData();
        formdata.append('image',image)
        axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${api}`,formdata).then(res =>{
           
            const imageUrl = res.data?.data?.url;
            if(res?.data?.data?.url){
                createUser(data?.email,data?.password).then(res =>{
                     console.log(res?.user?.email,'user');
                     if(res?.user){
                        updateProfileData(data?.name,imageUrl).then(res =>{
                            if(res){
                                navigate('/dashboard')
                            }
                        }).catch(e=>{
                            console.log(e);
                        })
                     }
                }).catch(e=>{
                    console.log(e);
                })
            }
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
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
            <div></div>
            <div className='px-5 py-5'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type='text' className='w-full py-4 rounded-lg px-5 '  placeholder='name' {...register("name")} />


                    <input type='email' placeholder='email' className='w-full py-4 rounded-lg px-5 mt-4 ' {...register("email", { required: true })} />
                    <input type='password' placeholder='password' className='w-full py-4 rounded-lg px-5 mt-4 ' {...register("password", { required: true })} />
                    <input type='file' placeholder='phone' className='w-full py-4 rounded-lg px-5 mt-4 ' {...register("photo", { required: true })} />

                       


                    <div className='flex justify-center items-center align-middle'>

                        <button className='py-2 px-10  bg-green-700 text-white rounded-md mt-3'>Login</button>
                    </div>
                </form>
                <div className='flex justify-center my-3 items-center'>
                    <Link className=' underline' to="/login">Please login</Link>
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
    );
};

export default Registration;