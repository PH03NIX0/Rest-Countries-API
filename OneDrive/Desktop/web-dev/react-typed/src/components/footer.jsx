import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

const footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-3 flex justify-between'>
                <div>
                    <ul>
                        <li>Analytics</li>
                        <li>Analytics</li>
                        <li>Analytics</li>
                        <li>Analytics</li>
                        <li>Analytics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer