import { RevealOnScroll } from "../../components/RevealOnScroll";

export const Fightstick = () => {
  
    return <div className="flex items-center justify-center p-20 md:p-25">
        <RevealOnScroll>
        <div className="flex flex-col-reverse md:flex-row items-center bg-black justify-center max-w-5xl px-4 md:h-96 word-wrap:break-word text:balance">

            <div className="text-center md:text-left sm:flex-col md:flex-row max-w-5xl"> 
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

        <div className="text-center text-gray-400 md:text-left max-w-5xl mx-auto px-4 py-10">
            <p>The idea for this project started way back in May 2024, back when I was learning how to play fighting games. At the time, I thought it would
                be cool to have a retro arcade stick and bring it to local events, so I started to search what I wanted in a fightstick. My older one, a
                Hori RAP-4, was decent enough, but I found that I also wanted something with a bit more weight to it. Oftentimes I would input a motion and it would move
                my stick just a bit, and I hated readjusting it everytime that happened. There are solutions on the internet where people put weights inside their
                stick, but I thought it'd be more interesting if I found one with a more solid chassis. Unfortunately, any fightstick made before seventh generation
                consoles isn't really made for competitive play, and the Hori HPS-1 for the Playstation is one of the few sticks that has a solid base to work with.                
            </p>

            <div class="py-15 text-center object-center justify-center">
                    <img className="mx-auto object-scale-down object-center size-96 " alt="" src="/website/basehori.jpg"/>
                    <span class="italic"> Peak gaming in 1998, for better or worse</span>
            </div>

             <p>With a solid metal on the base and top panel, the HPS-1 seemed to be the only real solution for me if I wanted something that I could use
                at home and at tournaments. The buttons and lever are absolutely atrocious, and I knew they would have to be replaced the second I used it.
                Thankfully, the Youtube page Scanline City did a pretty comprehensive breakdown on how to mod these types of controllers, so I had a little help
                along the way. My fightstick had a different board and a few additional buttons, but everything else in the video applied.
                Step one was to desolder the buttons from the board.
            </p> 

            <div class="grid grid-cols-1 md:grid-cols-3 md:flex-row py-15 gap-6 text-center object-center justify-center">
                <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/baseboard.jpg"/>
                <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/dirtyboard.jpg"/>
                <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/cleanboard.jpg"/>
            </div>
            <div class="text-center">
            <   span class="italic">middle image is my first go at desoldering. third image I cleaned everything up with some desoldering wick and alcohol</span>
            </div>


        </div>    

        </RevealOnScroll>
    </div>;
};