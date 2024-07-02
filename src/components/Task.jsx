import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../features/todoSlice";

const Task = ({ id, name, isCompleted, onEdit }) => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(completeTask(id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <div className={`
            ${isCompleted ? 'bg-gray-400' : 'bg-primary'}
            w-full max-w-2xl py-3 px-2 flex items-center justify-between rounded-lg
        `}>
            <div className='flex items-center gap-x-2 '>
                <input type="checkbox" name="task" checked={isCompleted} onChange={handleComplete} />
                <label className="text-xl lg:text-2xl tracking-wide capitalize">
                    {name}
                </label>
            </div>
            <div className='flex items-center gap-x-3'>
                {!isCompleted && (
                    <button type="button" className="p-1 bg-blue-500 text-white rounded-lg" onClick={onEdit}>
                        <FaEdit size={25} />
                    </button>
                )}
                <button type="button" className="p-1 bg-red-500 text-white rounded-lg" onClick={handleDelete}>
                    <AiFillDelete size={25} />
                </button>
            </div>
        </div>
    );
};

export default Task;
