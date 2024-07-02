import { FaBars, FaTimes } from "react-icons/fa"
import { MdDarkMode, MdLightMode } from "react-icons/md";


const Navbar = ({  theme, toggleTheme }) => {
  
  return (
      <nav className='w-full shadow h-20'>
      <div className="container mx-auto px-4 lg:px-2 xl:px-1 flex items-center justify-between h-full">
        
              <div>
              <h1 className='text-primary text-3xl lg:text-4xl tracking-wider font-semibold'>TaskTracker</h1>
        </div>
        <div className='flex items-center gap-x-4'>
        <button type="button" className="flex items-center justify-center">
              {theme === 'cupcake' ? <MdDarkMode size={27} onClick={toggleTheme} /> : <MdLightMode size={27} onClick={toggleTheme} />}
          </button>
          
        </div>
          </div>
    </nav>
  )
}

export default Navbar