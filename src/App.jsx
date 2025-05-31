import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import  MainPage  from './components/MainPage';
import { Footer } from './components/sections/Footer';
import { Fightstick } from './pages/Fightstick';
import { PersonalWeb } from './pages/PersonalWeb';
import { BatteryFix } from './pages/BatteryFix';
import { BrowserRouter as Router, Route, Routes } from "react-router"
import "./index.css";
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
   return (
  <>  
        <Footer />
        <Router>
          <ScrollToTop/>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
            <Routes>
              <Route path="/website" element={<MainPage />} />
              <Route path="/website/fightstick" element={<Fightstick/>}/>
              <Route path="/website/personalweb" element={<PersonalWeb/>}/>
              <Route path="/website/batteryfix" element={<BatteryFix/>}/>
            </Routes>
        </Router>

   </>
  );
}
export default App;