import { FaTasks, FaHome, FaArrowLeft } from 'react-icons/fa'

const Task = () => {
  return (
    <>
      <nav>
        <form className='flex items-center bg-gray-400 mt-6 shadow-2xl'>
          <h1 className='flex p-5 m-7 text-2xl font-bold gap-3 items-center w-full'>
            <FaTasks /> Task Management
          </h1>
          <div className='flex justify-end w-full'>
            <a href='/home' className='m-5 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 flex gap-3 items-center'>
              <FaHome /> Home
            </a>
          </div>
        </form>
      </nav>

      <div className='flex gap-2 mt-10 m-7 text-2xl font-bold items-center'>
        <a href='/home'><FaArrowLeft /></a>
        <h2>Create new task</h2>
      </div>

      <form className='p-5 m-7 flex flex-col justify-center border border-gray-300 shadow-lg rounded-lg w-full' onSubmit={handleSubmit}>
        <h2 className='m-1 text-xl font-bold'>Task Title</h2>
        <input type='text' placeholder='Enter task title' onChange={(e) => handleformDatachange('title', e.target.value)} className='m-1 p-2 border border-gray-300 rounded-lg w-1/2' required />
        <h2 className='m-1 text-xl font-bold'>Description</h2>
        <textarea placeholder='Enter task description' onChange={(e) => handleformDatachange('description', e.target.value)} className='m-1 p-2 border border-gray-300 rounded-lg w-1/2' required></textarea>
        <div className='flex'>
          <h2 className='m-1 text-xl font-bold'>Priority</h2>
          <select onChange={(e) => handleformDatachange('priority', e.target.value)} className='m-1 p-2 border border-gray-300 rounded-lg w-fit flex' required>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <h2 className='m-1 text-xl font-bold'>Status</h2>
          <select onChange={(e) => handleformDatachange('status', e.target.value)} className='m-1 p-2 border border-gray-300 rounded-lg w-fit flex' required>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <button type='submit' className='m-1 p-2 bg-green-500 text-white rounded-lg w-1/4 hover:bg-green-700'>Create Task</button>
        <a href='/home' className='m-1 p-2 bg-red-500 text-white rounded-lg w-1/4 text-center'>Cancel</a>
      </form>

    </>
  )
}

export default Task