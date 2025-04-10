import { useState } from 'react';
import { IntroScreen } from './IntroScreen';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import "../index.css";
import ScrollToTop from './ScrollToTop';

const MainPage = ()  => {
  const [isLoaded, setisLoaded] = useState(false);
  if (window.sessionStorage.getItem("firstLoadDone") == null) {
   return(
   <>
   {!isLoaded && <IntroScreen onComplete={() => {
      setisLoaded(true);
      window.sessionStorage.setItem( "firstLoadDone", 1);
      }} />}{""}
   <div 
   className={`min-h-screen transition-opacity duration-700 ${
      isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
   >
   <Home />
      <About /> 
      <Projects />
      <Contact />
      <Footer />

      </div>
   </> 
   );
}

else {
 
   return (
  <>
    <Home />
      <About /> 
      <Projects />
      <Contact />
      <Footer />  
  </>
  
  );}
};
export default MainPage;