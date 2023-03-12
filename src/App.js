import Navbar from "./Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container newConainer">
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/pricing" element={ <Pricing />} />
          <Route path="/about" element={ <About />} />
        </Routes>
      </div>
      
    </div>
  )
}




export default App;
