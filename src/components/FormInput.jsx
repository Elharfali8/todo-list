import React from 'react'

const FormInput = () => {
  return (
    <label className="form-control w-full max-w-2xl">
    <div className="label">
      <span className="text-sm lg:text-md">Add your task...</span>
    </div>
          <div className='relative'>
          <input type="text" placeholder="Type here" className="h-9 lg:h-10 w-full max-w-2xl bg-neutral-300 focus:outline-none rounded-xl placeholder:text-black pl-2 text-lg" />
    </div>
  </label>
  )
}

export default FormInput