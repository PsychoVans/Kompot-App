import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.scss'
import Home from "./components/home";
import LoginForm from "./components/loginform";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import About from "./components/about";
import ToApp from "./components/app/toapp";
import ToItem from "./components/app/toitem";



function App() {
  

  return (
    <>
     <Router>
        <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/toapp" element={<ToApp />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
