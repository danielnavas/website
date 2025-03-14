import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
        });

        const handleSubmit = (e) => {
            e.preventDefault();

        

            emailjs
            .sendForm(
                 import.meta.env.VITE_SERVICE_ID,
                 import.meta.env.VITE_TEMPLATE_ID, 
                 e.target, 
                 import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({name:"", email:"", message:""});
            })
            .catch(() => alert("Something went wrong. Please try again."));
        };

        return (
            <section 
            id="contact" 
            className="min-h-screen bg-gray-900 flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                    <div className="px-2 w-sm md:w-150">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent text-center">
                            Get In Touch!
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                type="text"
                                id="name"
                                name="name"
                                required 
                                value={formData.name}
                                className="w-full placeholder-white bg-gray-600 border border-white/10 rounded px-4 py-3 
                                hover:bg-black hover:border-teal-700 transition focus:outline-none focus:border-teal-700 focus:bg-black"
                                placeholder="Name..."
                                onChange={(e) =>
                                    setFormData({ ...FormData, name: e.target.value})
                                }        
                                />            
                            </div>

                            <div className="relative">
                                <input 
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full placeholder-white bg-gray-600 border border-white/10 rounded px-4 py-3 
                                hover:bg-black hover:border-teal-700 focus:outline-none focus:border-teal-700 focus:bg-black"
                                placeholder="Example@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...FormData, email: e.target.value})
                                }    
                                />            
                            </div>

                            <div className="relative">
                                <textarea
                                id="message"
                                name="message"
                                required 
                                value={formData.message}
                                rows={5}
                                className="w-full placeholder-white bg-gray-600 border border-white/10 rounded px-4 py-3 
                                hover:bg-black hover:border-teal-700 transition focus:outline-none focus:border-teal-700 focus:bg-black"
                                placeholder="Your Message Here..." 
                                onChange={(e) =>
                                    setFormData({ ...FormData, message: e.target.value})
                                }       
                                />            
                            </div>

                            <button type="submit" className="w-full bg-teal-500 border border-teal-500/50 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-black hover:text-teal-400">
                                Send Message
                            </button>
                        </form>
                    </div>
                </RevealOnScroll>
        </section>
        );   
};