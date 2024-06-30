import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, Sidebar } from "./components"
import Home from "./pages/Home"
import { useEffect, useState } from "react"


function App() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [theme, setTheme] = useState('cupcake')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dracula' ? 'cupcake' : 'dracula'));
  };

  const handleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <Navbar navIsOpen={navIsOpen} theme={theme} toggleTheme={toggleTheme} handleNav={handleNav} />
      <Sidebar navIsOpen={navIsOpen} handleNav={handleNav}  />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
