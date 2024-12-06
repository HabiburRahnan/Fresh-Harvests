import { Outlet } from "react-router-dom"
import Navbar from "./Sheard/Navbar"
import Footer from "./Sheard/Footer"


function App() {

  return (
    <div className="bg-[#f8f8f8]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
