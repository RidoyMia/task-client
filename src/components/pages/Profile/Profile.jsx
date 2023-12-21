import React, { useContext } from 'react';
import { authContext } from '../../Provider/AuthContext';

const Profile = () => {
    const {user} = useContext(authContext)
    return (
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div>
                    <img src={user?.photoURL} className='w-44 h-44 rounded-full'></img>
                </div>
                <div>
                    <h1>Email : {user?.email}</h1>
                    <h1>Name : {user?.displayName}</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;