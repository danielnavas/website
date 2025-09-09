import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

 
export const Navbar =({ menuOpen, setMenuOpen}) => {

        useEffect(() => {
            document.body.style.overflow = menuOpen ? "hidden" : "";

        }, [menuOpen]);

   {/*hides navbar for mobile size screens*/}

        return (
        <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/20 shadow-lg">
            <div className= "max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                         Daniel Navas
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <HashLink to="/website#home"
                            className="text-gray-200 hover:text-teal-500 transition-colors">Home
                        </HashLink>

                        <HashLink to="/website#about"
                            className="text-gray-200 hover:text-teal-500 transition-colors">About
                        </HashLink>                   

                        <HashLink to="/website#projects" 
                            className="text-gray-200 hover:text-teal-500 transition-colors">Projects
                        </HashLink>

                        <HashLink to="/website#contact" 
                            className="text-gray-200 hover:text-teal-500 transition-colors">Contact
                        </HashLink>
                        </div>
                </div>
            </div>
        </nav>
        );        
    };