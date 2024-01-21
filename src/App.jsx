import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer"; 
import RandomThoughts from './Components/RandomThoughts';
import MobileNavigationMenu from './Components/MobileNavigationMenu';

function App() {

  return (
    <>
      

        
         <RandomThoughts />
        
        <MobileNavigationMenu />
        <Footer />  {/* Footer */}
      
     
    </>
  )
}

export default App
