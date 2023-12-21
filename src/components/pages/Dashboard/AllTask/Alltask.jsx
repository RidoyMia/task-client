import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../Provider/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Alltask = () => {
    const navigate = useNavigate()
    const {user} = useContext(authContext)
    const [toDo,setToDo] = useState([]);
    const [ongoing,setOngoing] = useState([]);
    const [completed,setCompleted] = useState([])
    const [loading,setLoading] = useState(false)
    console.log('user from headeeeee');
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://scic-task-server.vercel.app/api/v1/task/user/${user?.email}?task=to-do`).then(res => {
            
            setToDo(res.data.result)
        })
        setLoading(false)
    },[user,loading])
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://scic-task-server.vercel.app/api/v1/task/user/${user?.email}?task=ongoing`).then(res => {
           
            setOngoing(res.data.result)
        })
        setLoading(false)
    },[user,loading])
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://scic-task-server.vercel.app/api/v1/task/user/${user?.email}?task=completed`).then(res => {
           
            setCompleted(res.data.result)
        })
        setLoading(false)
    },[user,loading]);
    
    const sendProcessChange = (id)=>{
        setLoading(true);
        axios.patch(`https://scic-task-server.vercel.app/api/v1/task/process/${id}`).then(res => {
            if(res.data){
                setLoading(false)
            }
            else{
                setLoading(false)
            }
        })
    }
    const updatedTaskHandler = (id)=>{
        navigate(`/dashboard/updated/${id}`)
    }
    const deletedHandler = async(id) =>{
      console.log(id,'deleted');
      setLoading(true)
      // axios.delete(`https://scic-task-server.vercel.app/api/v1/task/delete/${id}`).then(res =>{
      //   if(res?.data){
      //     setLoading(false)
      //   }
      // })
      // setLoading(false)
      const res = await axios.delete(`https://scic-task-server.vercel.app/api/v1/task/delete/${id}`).then(res =>{
        if(res?.result){
          setLoading(fasle)
        }
      })
    }
   if(loading){
     return <div className='flex justify-center  items-center align-middle py-20'>
        <h1>Loading...</h1>
     </div>
   }
    return (
        <div className='text-black px-10 '>
            <div>
                <h1 className='text-3xl text-left '>To-do</h1>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Tile</th>
        <th>Deadline</th>
        <th>process</th>
        <th>priority</th>
        <th>action</th>
        <th>update</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
     
    
        {
            toDo?.map((p,index)=><tr><th>{index + 1}</th>
            <td><h1 className='text-lg font-semibold'>{p?.title}</h1></td>
            <td>{p?.deadline}</td>
            <td>{p?.process}</td>
            <td>{p?.priority}</td>
            <td><button className='py-1 px-10 bg-green-700 rounded-2xl text-white' onClick={()=>sendProcessChange(p?._id)}>send-Ongoing</button></td>
            <td><button className='py-1 px-10 bg-green-400 rounded-2xl text-white' onClick={()=>updatedTaskHandler(p?._id)}>Update</button></td>
            <td><button className='py-1 px-10 bg-red-600 rounded-2xl text-white' onClick={()=>deletedHandler(p?._id)}>Delete</button></td>
          </tr>)
        }
        
      
    </tbody>
  </table>
</div>
            </div>
            <div className='py-10'>
            <div>
                <h1 className='text-3xl text-left py-5 '>OnGoing</h1>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Tile</th>
        <th>Deadline</th>
        <th>process</th>
        <th>priority</th>
        <th>action</th>
        <th>update</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
     
    
        {
            ongoing?.map((p,index)=><tr><th>{index + 1}</th>
            <td><h1 className='text-lg font-semibold'>{p?.title}</h1></td>
            <td>{p?.deadline}</td>
            <td>{p?.process}</td>
            <td>{p?.priority}</td>
            <td><button className='py-1 px-10 bg-green-700 rounded-2xl text-white' onClick={()=>sendProcessChange(p?._id)}>send-complete</button></td>
            <td><button className='py-1 px-10 bg-green-400 rounded-2xl text-white' onClick={()=>updatedTaskHandler(p?._id)}>Update</button></td>
            <td><button className='py-1 px-10 bg-red-600 rounded-2xl text-white' onClick={()=>deletedHandler(p?._id)}>Delete</button></td>
          </tr>)
        }
        
      
    </tbody>
  </table>
</div>
            </div>
            </div>
            <div className='py-10'>
            <div>
                <h1 className='text-3xl text-left py-5 '>completed</h1>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Tile</th>
        <th>Deadline</th>
        <th>process</th>
        <th>priority</th>
      
        <th>update</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
     
    
        {
            completed?.map((p,index)=><tr><th>{index + 1}</th>
            <td><h1 className='text-lg font-semibold'>{p?.title}</h1></td>
            <td>{p?.deadline}</td>
            <td>{p?.process}</td>
            <td>{p?.priority}</td>
            
            <td><button className='py-1 px-10 bg-green-400 rounded-2xl text-white' onClick={()=>updatedTaskHandler(p?._id)}>Update</button></td>
            <td><button className='py-1 px-10 bg-red-600 rounded-2xl text-white' onClick={()=>deletedHandler(p?._id)}>Delete</button></td>
          </tr>)
        }
        
      
    </tbody>
  </table>
</div>
            </div>
            </div>
        </div>
    );
};

export default Alltask;