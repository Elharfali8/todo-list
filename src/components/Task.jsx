import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Task = ({id, name, isCompleted}) => {
  return (
    <div className='w-full max-w-2xl py-3 px-2 flex items-center justify-between bg-primary rounded-lg '>
      <div className='flex items-center gap-x-2 '>
        <input type="checkbox" name="task" checked={isCompleted} />
        <label className="text-xl lg:text-2xl tracking-wide capitalize">
          {name}
        </label>
      </div>
      <div className='flex items-center gap-x-3'>
        <button type="button" className="p-1 bg-blue-500 text-white rounded-lg">
          <FaEdit size={25} />
        </button>
        <button type="button" className="p-1 bg-red-500 text-white rounded-lg">
          <AiFillDelete size={25} />
        </button>
      </div>
    </div>
  )
}

export default Task