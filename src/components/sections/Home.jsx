import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <div className="flex justify-center">
            <img class="object-scale-down w-64 h-64 rounded-full" alt="" src="/website/home/me.JPG" />
            </div>
            <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Daniel. Welcome!
            </h1>
            <p className=" text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Aspiring IT professional. This is my website!
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="border border-teal-500/50 bg-teal-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10 hover:text-teal-400"> View Projects</a>

                <a href="#contact" className=" border border-teal-500/50 bg-teal-500 text-black py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10 hover:text-teal-400"> Contact Me</a>


            </div>
        </div>
        </RevealOnScroll>
    </section>;
}