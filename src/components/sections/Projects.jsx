import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Projects = () => {


    return <section id="projects" className="min-h-screen py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent text-center">
            Featured Projects   
            </h2>   
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row gap-6">
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down size-48 rounded-md" alt="" src="/website/home/code.jpg" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 mt-2"> Personal Website</h3>  
                        <p className="text-gray-400 mb-4">Created a personal website to showcase my experience building a website for the first time in over a decade. 
                            Showcases the technologies I used and how my experience was different compared to web development in 2013-2015.</p>  
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "Tailwind CSS", "React JS", "Vite"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                            hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                            </span>
                        ))}    
                    </div>
                    <div className="flex">
                        <Link to="/website/personalweb"
                        className=" text-teal-500 hover:text-teal-400 transition-colors my-4">
                        Check it out here! &#8658;	
                        </Link>
                    </div> 
                </div>
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down size-48 rounded-md" alt="" src="/website/home/proxmox.jpg" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 mt-2"> Music Server</h3>  
                        <p className="text-gray-400 mb-4">Created my own server in order to stream my music library wherever I go! Goes over the process of setting up
                            a Virtual Machine, Linux Container, and the open-source Jellyfin media system. </p>  
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Proxmox", "Jellyfin", "NAS", "VMs", "Docker"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                            hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                            </span>
                        ))}    
                    </div>
                    <div className="flex">
                        <a href="#"
                        className=" text-teal-500 hover:text-teal-400 transition-colors my-4">
                        Full write-up coming soon!	
                        </a>
                    </div> 
                </div>
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down size-48 rounded-md" alt="" src="/website/home/fightstick.jpg" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 mt-2"> Fightstick Modification</h3>  
                        <p className="text-gray-400 mb-4">Purchased a very, very old fightstick and used its poorly made internals as an opportunity to get
                            hands-on experience with soldering, multimeter usage, circuitry fundamentals, wiring, and different power tools.</p>  
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Soldering", "Rotary Tools", "Electronics"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                            hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                            </span>
                        ))}    
                    </div>
                    <div className="flex">
                        <Link to="/website/fightstick"
                        className=" text-teal-500 hover:text-teal-400 transition-colors my-4">
                        Check it out here! &#8658;
                        </Link>
                    </div> 
                </div>
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down size-48 rounded-md" alt="" src="/website/home/battery.jpg" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 mt-2"> Video Game Battery Replacement</h3>  
                        <p className="text-gray-400 mb-4">Revived some old video games that had used up batteries. Goes into the different battery types,
                             what soldering methods work best on these boards, and why some games don't actually need replacements!</p>  
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Soldering", "Electronics"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                            hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                            </span>
                        ))}    
                    </div>
                    <div className="flex">
                        <Link to ="/website/BatteryFix"
                        className=" text-teal-500 hover:text-teal-400 transition-colors my-4">
                        Check it out here! &#8658;	
                        </Link>
                    </div> 
                </div>

                


   
            
            </div>     
        </div>
        </RevealOnScroll>
    </section>;
};