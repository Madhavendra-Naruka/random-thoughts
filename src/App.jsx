import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer"; 
import MiniProjects from './Components/MiniProjects';
import MobileNavigationMenu from './Components/MobileNavigationMenu';

function App() {

  return (
    <>
      

        
         <MiniProjects />
        
        <MobileNavigationMenu />
        <Footer />  {/* Footer */}
      
     
    </>
  )
}

export default App
