import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ task, onSave, toggleModal }) => {
    const [taskName, setTaskName] = useState('');

    useEffect(() => {
        if (task) {
            setTaskName(task.name);
        }
    }, [task]);

    const handleSave = () => {
        onSave(task.id, taskName);
    };

    return (
        <div className={`fixed inset-0 top-20 modal-bg z-20 grid place-items-center px-4 lg:px-2 xl:px-0`}>
            <div className='card bg-base-100 w-full max-w-[500px] shadow-xl p-4 lg:p-6'>
                <div className='flex justify-end pb-8'>
                    <button type='button' onClick={toggleModal}>
                        <FaTimes size={28} />
                    </button>
                </div>
                <input
                    type="text"
                    className='bg-slate-600 text-white focus:outline-none pl-3 h-10 rounded-md text-lg tracking-wider'
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <div className='flex items-center justify-center'>
                    <div className='mt-4 lg:mt-6 flex items-center gap-x-3'>
                        <button type='button' className='text-lg lg:text-xl capitalize font-semibold tracking-widest px-3 py-1 rounded-md btn-success btn text-white' onClick={handleSave}>
                            Update
                        </button>
                        <button type='button' className='text-lg lg:text-xl capitalize font-semibold tracking-widest px-3 py-1 rounded-md text-white btn btn-error' onClick={toggleModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
