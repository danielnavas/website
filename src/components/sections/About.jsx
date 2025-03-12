import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

        const FrontendSkills = ["React", "TailwindCSS", "HTML",];

        const CustomerSkills = ["place1", "place2", "place3",];


    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent text-center">
            About Me
            </h2>

            <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="mb-6 text-center">
                    Former Piano teacher and Radiologic Technologist looking to pivot into Information Technology. I like doing things with electronic devices and computers.
                    This website is documentation of that! I'll be using this to upload and talk about different projects I'm working on.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 px-0 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend skill?</h3>
                        <div className="flex flex-wrap gap-2">

                        {FrontendSkills.map((tech, key) =>(
                            <span 
                                key={key}
                                className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                                hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}

                        </div>
                    </div>

                    <div className="rounded-xl p-6 px-8 hover:-translate-y-1 transition-all">    
                        <h3 className="text-xl font-bold mb-4">other skills</h3>
                        <div className="flex flex-wrap gap-2">

                            {CustomerSkills.map((tech, key) =>(
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>A.S. Radiologic Technology</strong> - Los Angeles Community College
                        </li>
                        <li>
                            <strong>B.A. Music Composition</strong> - University of California, Santa Barbara
                        </li>
                    </ul>
                </div>
                <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Radiologic Technologist - UCLA Medical Center (2022-2024)</h4>
                                <p>
                                    insert description here
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Radiologic Technologist - UC Davis Medical Center (2022-2024)</h4>
                                <p>
                                    insert description here
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}