import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/todoSlice";

const FormInput = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()
  

  const handleInput = (e) => {
    const value = e.target.value
    setTask(value)
  }

  const handleSubmit = () => {
    if (task) {
      dispatch(addTask(task))
      setTask('')
    }
    return;
  }

  return (
    <label className="form-control w-full max-w-2xl  z-10">
    <div className="label">
      <span className="text-sm lg:text-md">Add your task...</span>
    </div>
          <div className='relative'>
        <input
          type="text"
          placeholder="Type here"
          className=" h-10 lg:h-12 w-full max-w-2xl bg-neutral-200 focus:outline-none rounded-xl placeholder:text-black pl-2 text-lg tracking-wider"
          value={task}
          onChange={handleInput}
        />
        <button type="button" className="absolute bottom-0 top-0 right-2 text-primary" onClick={handleSubmit}>
          <IoIosAddCircle size={27}  />
        </button>
    </div>
  </label>
  )
}

export default FormInput