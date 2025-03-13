import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent text-center">
            Featured Projects    
            </h2>   
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <div>
                        <img class="size-48 shadow-xl rounded-md" alt="" src="src/assets/ferret.jpg" />
                    </div>
                    <h3 className="text-xl font-bold mb-2"> Personal Website</h3>  
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
                    <a href="#" 
                    className=" text-teal-500 hover:text-teal-400 transition-colors my-4">
                    View Project &rArr;	
                    </a>
                </div> 
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Fightstick Modification</h3>  
                    <p className="text-gray-400 mb-4">Bought a very old fightstick created for the playstation 1, and used it to teach myself the basics of soldering, rotary tools, and multimeter usage.</p>  
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
                    <a href="#" 
                    className="text-teal-500 hover:text-teal-400 transition-colors my-4">
                    View Project &rArr;	
                    </a>
                </div> 
            </div>
   
            
            </div>     
        </div>
        </RevealOnScroll>
    </section>;
}