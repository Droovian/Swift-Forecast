import { Route, Router,  Routes, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Search from "./components/search"
function App() {

  return (
   <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
   </div>
  )
}

export default App
