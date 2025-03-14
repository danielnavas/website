import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

        const Certifications = ["CompTIA A+"];

        const OtherSkills = ["TailwindCSS", "React JS", "HTML", "Computer Troubleshooting", "Soldering"];


    return <section id="about" className="min-h-screen flex bg-gray-900 items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent text-center">
            About Me
            </h2>

            <div className=" rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all">
                <p className="mb-6 md:text-center">
                    Former Piano teacher and Radiologic Technologist looking to pivot into Information Technology. I like doing things with electronic devices and computers.
                    This website is documentation of that! I'll be using this to upload and talk about different projects I'm working on.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl py-6">
                        <h3 className="text-xl font-bold mb-4">Certifications</h3>
                        <div className="flex flex-wrap gap-2">

                        {Certifications.map((tech, key) =>(
                            <span 
                                key={key}
                                className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                                hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(0,128,128,0.4)] transition">
                                {tech}
                            </span>
                        ))}

                        </div>
                    </div>

                    <div className="rounded-xl py-6 md:p-6">    
                        <h3 className="text-xl font-bold mb-4">Related skills</h3>
                        <div className="flex flex-wrap gap-2">

                            {OtherSkills.map((tech, key) =>(
                                <span 
                                    key={key}
                                    className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                                    hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(0,128,128,0.4)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong className="text-teal-500">A.S. Radiologic Technology</strong> - Los Angeles Community College
                        </li>
                        <li>
                            <strong className="text-teal-500">B.A. Music Composition</strong> - University of California, Santa Barbara
                        </li>
                    </ul>
                </div>
                <div className="p-8 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Recent Work Experience</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong className="text-teal-500">Traveling Radiologic Technologist</strong> - Aya Healthcare
                        </li>
                        <li>
                            <strong className="text-teal-500">Radiologic Technologist</strong> - UCLA Medical Center
                        </li>
                        <li>
                            <strong className="text-teal-500">Radiologic Technologist</strong> - UC Davis Medical Center
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex p-8 justify-center">
                 <a href="/website/resume.pdf" className="bg-teal-500 border border-teal-500/50 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-black hover:text-teal-400">
                                View Full Resume
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}