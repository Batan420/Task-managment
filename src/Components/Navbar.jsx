import React from 'react'
import {FaTasks,FaHome,FaPlus} from 'react-icons/fa'

const Navbar = () => {
  return (
  <>
    <nav>
    <form className='flex  items-center bg-gray-400 mt-6 shadow-2xl '>
    <h1 className='flex p-5 m-7 text-2xl font-bold gap-3 items-center w-full'  ><FaTasks /> Task Management</h1>
    <div className=' flex  justify-end  w-full'>
    <a href='/home' className='m-5 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 flex gap-3 items-center' ><FaHome /> Home</a>
    <a href='/home/task' className='m-5 p-3 bg-green-500 text-white rounded-lg hover:bg-green-700 flex gap-3 items-center' ><FaPlus /> Add Task</a>
    </div>
    </form>
    </nav>
    <div className=' p-5 m-7 flex'>
      <h2 className=' flex text-2xl font-bold gap-2 items-center'> <FaTasks /> Task Control Panel</h2>
     
    </div>
    <form className='flex gap-4 p-5 m-7'>
      <input type='text' placeholder='search for Tasks' className='p-2 border border-gray-300 rounded-lg w-full' />
      <select className='p-2 border border-gray-300 rounded-lg'>
        <option>All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select className='p-2 border border-gray-300 rounded-lg'>
        <option>All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type='submit' className='p-2 bg-green-500 text-white rounded-lg w-full hover:bg-green-700'>Apply Filter</button>
      <button type='reset' className='p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-700'>Clear Filter</button>
     </form>
     <table className='w-full border m-6'>
      <thead>
        <tr className='bg-gray-200'>
        <th className='border' >Title</th>
        <th className='border'>Description</th>
        <th className='border'>Priority</th>
        <th className='border'>Status</th>
        <th className='border'>Actions</th>
        </tr>
      </thead>
      </table>
      
  </>
  )
}

export default Navbar 