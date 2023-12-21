import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../../Provider/AuthContext';
import axios from 'axios';

// title : string,
// author : string,
// descriptions : string,
// deadlines : string,
// priority : 'High' | 'Law' | 'moderate'
// process : 'to-do' | 'ongoing' | 'completed'
const AddTask = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const {user} = useContext(authContext);
    console.log(user,'githurbb');
    const { id } = useParams();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        setLoading(true)
        console.log(data);
        axios.post(`https://scic-task-server.vercel.app/api/v1/task/create`,data).then(res =>{
            console.log(res.data,'updated one');
            setLoading(false)
            navigate('/dashboard')
        })
        setLoading(false)
    }

    if(loading){
        return <div className='flex justify-center  items-center align-middle py-20'>
           <h1>Loading...</h1>
        </div>
      }
    return (
        <div className='bg-white text-black container py-5'>
            <h1 className='text-center text-3xl font-semibold'>Updated iteam</h1>
            <div className='px-5 lg:px-20 md:px-16 py-10'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='lg:flex md:flex justify-center items-center align-middle gap-x-5'>
                        <input className='w-full py-4 mt-4 outline-none rounded-2xl bg-gray-300 px-5 ' type='text' placeholder='title' {...register("title")} />
                        <input className='w-full py-4 mt-4 outline-none rounded-2xl bg-gray-300 px-5 ' type='email' readOnly value={user?.email} placeholder='title' {...register("author")} />
                    </div>
                    <div className='lg:flex md:flex justify-center items-center align-middle gap-x-5'>
                        <textarea className='w-full py-10 mt-4 outline-none rounded-2xl  bg-gray-300 px-5' type='text' placeholder='description' {...register("descriptions")} />
                        <input className='w-full py-4 mt-4 outline-none rounded-2xl  bg-gray-300 px-5' type='date' placeholder='deadline' {...register("deadlines")} />
                    </div>
                    <div className='lg:flex md:flex justify-center items-center align-middle gap-x-5'>
                    <select className=' px-5 w-full py-4 mt-4 bg-gray-300 rounded-2xl' {...register("priority")}>
        <option value="high">high</option>
        <option value="Low">Low</option>
        <option value="moderate">moderate</option>
      </select>
      <select className='w-full px-5  py-4 mt-4 bg-gray-300 rounded-2xl' {...register("process")}>
        <option value="to-do">to-do</option>
        <option value="ongoing">ongoing</option>
        <option value="completed">completed</option>
      </select>
                        
                    </div>
                    



                    <div className='flex justify-center items-center align-middle mt-10'>
                        <button className='py-2 px-10 bg-green-800 text-white rounded-lg'>AddTask</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;