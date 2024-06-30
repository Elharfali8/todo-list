import { FaHome, FaCheckCircle, FaArchive } from "react-icons/fa";


export const navLinks = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        icon: <FaHome />
    },
    {
        id: 2,
        title: 'Completed',
        path: '/completed',
        icon: <FaCheckCircle />
    },
    {
        id: 3,
        title: 'Archive',
        path: '/archive',
        icon: <FaArchive />
    },
]