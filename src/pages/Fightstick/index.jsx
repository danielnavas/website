import { RevealOnScroll } from "../../components/RevealOnScroll";

export const Fightstick = () => {
  
    return <section id="fightstick" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent text-center">
            Featured Projects   
            </h2>   
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row gap-6">                  
            </div>
            <div className="p-6 rounded-xl border border-white/20 
                hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                    <div>
                        <img class="object-scale-down size-48 rounded-md" alt="" src="/website/fightstick.jpg" />
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
            </div>     
        </div>
        </RevealOnScroll>
    </section>;
};