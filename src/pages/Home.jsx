import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import { Task } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../components/Modal';
import { editTask } from '../features/todoSlice';

const Home = () => {
    const { list } = useSelector((store) => store.todo);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleEditTask = (task) => {
        setSelectedTask(task);
        toggleModal();
    };

    const handleSaveTask = (id, name) => {
        dispatch(editTask({ id, name }));
        toggleModal();
    };

    return (
        <main className='min-h-[calc(100vh-80px)] py-10 lg:py-20'>
            <div className="container mx-auto px-4 lg:px-2 xl:px-1 h-full grid place-items-center" >
                <div className='card w-full shadow-xl hover:shadow-2xl transition duration-300 p-4 grid place-items-center py-10 lg:py-16'>
                    <FormInput />
                    <div className='mt-8 lg:mt-10 grid place-items-center w-full'>
                        {list.length > 0 && <p className='w-full max-w-2xl text-lg lg:text-xl mb-3 text-gray-500'>{list.length > 1 ? `${list.length} Tasks` : `${list.length} Task`}</p>}
                        <div className='grid gap-y-3 lg:gap-y-4 w-full place-items-center'>
                            {list?.map((task) => {
                                const { id } = task;
                                return <Task key={id} {...task} onEdit={() => handleEditTask(task)} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal task={selectedTask} onSave={handleSaveTask} toggleModal={toggleModal} />}
        </main>
    );
};

export default Home;
