import { RevealOnScroll } from "../../components/RevealOnScroll";

export const Fightstick = () => {
  
    return <div className="flex items-center justify-center p-20 md:p-25">
        <RevealOnScroll>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-5xl px-4 md:h-96 word-wrap:break-word text:balance">

            <div className="text-center md:text-left sm:flex-col md:flex-row"> 
                <h3 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600
                bg-clip-text text-transparent">Hori HPS-1 PS1 Fightstick Modification</h3>  
                <p className=" text-gray-400 mb-4">I purchased a very, very old fightstick and used its poorly made internals as an opportunity to get
                        hands-on experience with soldering, multimeter usage, circuitry fundamentals, wiring, and different power tools. Let's see what's inside!</p>  
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

                    <div class="">
                    <img className="object-scale-down md:pl-4" alt="" src="/website/fightstick.jpg"/>
                    </div>  

        </div> 

        <div className="text-center md:text-left max-w-5xl mx-auto px-4 py-10">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>    

        </RevealOnScroll>
    </div>;
};