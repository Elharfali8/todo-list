import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import Home from "./pages/Home"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import { editTask } from "./features/todoSlice"
import { useDispatch, useSelector } from "react-redux"


function App() {
  const [theme, setTheme] = useState('cupcake')
  const { modalOpen } = useSelector((store) => store.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dracula' ? 'cupcake' : 'dracula'));
  };

  const toggleModal = () => {
    dispatch(editTask())
  }


  return (
    <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {modalOpen && <Modal toggleModal={toggleModal} />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
