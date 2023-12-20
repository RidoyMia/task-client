import React from 'react';
import { MdOutlineDeveloperMode } from "react-icons/md";
import { TbBuildingBank } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
const Choose = () => {
    return (
        <div className='py-24'>
            <h1 className='text-center py-10  uppercase text-3xl font-semibold'>Who can choose us</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-x-3 gap-y-7'>
                <div className='text-center p-3 border rounded-sm'>
                    <div className='flex justify-center'>
                        <h1 className='text-5xl py-2'><MdOutlineDeveloperMode></MdOutlineDeveloperMode></h1>
                    </div>
                    <h1 className='py-2 font-semibold'>Web developers</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>

                </div>
                <div className='text-center p-2 border rounded-sm'>
                <div className='flex justify-center'>
                        <h1 className='text-5xl py-2'><TbBuildingBank></TbBuildingBank></h1>
                    </div>
                    <h1 className='py-2 font-semibold'>Bankers</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>

                </div>
                <div className='text-center p-2 border rounded-sm'>
                <div className='flex justify-center'>
                        <h1 className='text-5xl py-2'><FaChalkboardTeacher></FaChalkboardTeacher></h1>
                    </div>
                    <h1 className='py-2 font-semibold'>Teachers</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>

                </div>
            </div>
        </div>
    );
};

export default Choose;