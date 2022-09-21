import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Herosection } from "./components/Herosection"
import { Servicesection } from "./components/Servicesection"
import "./css/App.css"

function App() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <Servicesection />
      <Footer/>
    </>
  )
}

export default App
