import Header from "./Components/Header"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Aboutus from "./Components/Aboutus";

function App() {
 

  return (
    
    <Router>
    <Header classname={"Header"}/>

    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    {/* <Route path="/about" element={<Aboutus/>}/> */}
    {/* <Route path="/footer" element={<Footer/>}/> */}

    </Routes>

    <Footer/>
    </Router>

    

    
  )
}

export default App
