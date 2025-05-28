import FadeInPage from "../../components/FadeInPage";

export const PersonalWeb = () => {
  
    return <div className="p-10 md:p-25">
        <FadeInPage>
        <div className="flex mx-auto flex-col-reverse md:flex-row items-center justify-center max-w-5xl md:h-96 px-4 word-wrap:break-word text:balance">
            <div className="text-center md:text-left sm:flex-col md:flex-row max-w-xl"> 
                <h3 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600
                bg-clip-text text-transparent">Personal Website</h3>  
                <p className="text-gray-400 mb-4 md:pr-4">I made a website, wow! With the power of YouTube and StackOverflow, anything is possible...</p>  
                <div className="flex flex-wrap justify-center md:justify-normal gap-2 mb-4">
                    {["ReactJS", "TailwindCSS", "Front-End Development", "Github"].map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                        hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        {tech}
                        </span>
                    ))}    
                </div>


            </div> 
            <div>
                <img className="object-scale-down rounded-md pb-8 md:pb-0 size-96" alt="" src="/website/home/code.jpg"/>
            </div>
            
              
        </div> 
     
        <hr className="m-auto h-[2px] mt-10 bg-gray-400 max-w-5xl border-0"></hr>
    
        <div className="text-center text-gray-400 md:text-left max-w-5xl mx-auto px-4 py-10">
            <p class="pb-10">
                Multiple careers ago, I learned how to make websites at a very basic level. Why? Mostly because my ex wanted me to. My first degree was in Music,
                so having a simple website up and running is a good idea if you want to have some sort of online presence, and for some reason I thought it wouldn't be too hard.
                Armed with some basic HTML/CSS experience from MySpace, I got to work, and after a few months of realizing it was in fact very hard, I made something half decent!
                After doing that for a few friends, I put web development to the side and essentially forgot about it.
            </p>


             <p class="pb-10"> Fast forward over 10 years later and I want to make another website. This time, I want to use it to showcase things that I hope will help me
                 get an IT job! Ah, classic music-to-healthcare-to-information technology pipeline. Some of these projects will be IT adjacent at best, but it'll
                  also serve as a way for me to look back on the electronics-related 
                 hobbies I've been up to. The job market is not looking too great, so I figured something like this should help me stand out in the sea of 
                 Help Desk applicants who were desperate enough to take a Cyber Security bootcamp and are applying to everything under the sun. In addition, 
                 a friend of mine told me about an opening for an entry level IT job that was closing applications in 2 weeks. Time to type, but hopefully with a more
                 structured approach than last time.
            </p> 

            <p class="pb-10">
            I still remember the hours of frustration spent looking up one thing after the other, and was determined to have a better start 
            this time around. The only files I had from over a decade ago were a mock-up for a martial arts website that had basic features like a header,
             footer, etc. with a few jquery files to make it look a little nicer. While it was good to use as a refresher, I didn't want to use decade old
              code and hope that it would translate well. The best way to learn is to follow, so I went to YouTube and got watching. 
            </p>

            <div class="py-15 text-center object-center justify-center">
                    <img className="mx-auto object-scale-down object-center " alt="" src="/website/newwebsite/oldwebsite.png"/>
                    <span class="italic">Not bad for the time, but my brain is developed now</span>
            </div>

            <p class="pb-10">
            After looking at a few different tutorials on how to build a single-page website and on the recommendation of my current partner, I downloaded
             Visual Studio Code as my new IDE of choice, and began to build my website with React. I also decided to use the TailwindCSS Framework instead
              of normal CSS because of the change in design philosophies for websites. Mobile-first seems to be the default mode of operation, and Tailwind
               has some elegant answers for how to best approach that. In 2013 I religiously followed Ethan Marcotte's Responsive Web Design, a book that
                was useful at the time, but outdated for my current needs. I needed a website up and running in a little under 2 weeks, and there's no way
                 I want to spend time doing math when I have to get a website working and projects completed. On top of that, Tailwind is especially good
                  for working almost entirely outside of your CSS document, so you can save time navigating. Over the course of developing my website I realized
                  that modern CSS has some responsive tools built in like the min() function and media queries, but having a website with clear documentation was
                  really helpful and I wouldn't want to go back to looking at w3schools or StackOverflow (Spoiler: I absolutely did go back).
            </p>



            <div class="md:flex object-center justify-center">
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-96 " alt="" src="/website/newwebsite/responsivebook.png"/>
                        <span class="italic">I still can't believe I used to do this in 2013.</span>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-96 " alt="" src="/website/newwebsite/breakpoints.png"/>
                        <figcaption class="italic">God bless breakpoints...</figcaption>
                </div>
      
            </div>

            <p class="pb-10">
            So over the course of a week, I built up a bare-bones website. Nothing fancy, but it worked(for the most part). Unfortunately, the last 10% of
             the website took just as long as the first 90% did, and most of this is because I didn't know exactly what I was getting into when I decided to use React.
             Had I realized that I actually needed a website with multiple pages, I might have used something else.
            </p>

            <div class="md:float-right md:pl-10 pb-10 text-center object-center justify-center">
                    <img className="mx-auto object-scale-down size-80" alt="" src="/website/newwebsite/morecode.png"/>
                    <figcaption class="italic overflow:visible">I no longer have to tab between pages to see my mistakes, all right!</figcaption>

            </div>

            <p class="pb-10">
            React being primarily a SPA library made it much harder than I would have imagined to do anything outside of the single page application.
             React doesn't include page routing by default, so you need to install React Router and restructure your files and links in order to accommodate this. 
             Hash/Anchor links don't work without an additional package either, which I only found out after hours of trial and error and searching on 
             StackOverflow. This seems like a huge oversight considering the fact that hash links are pretty useful in SPAs, and especially for what I 
             intended to do with my website. On the other hand, Tailwind has some excellent documentation that helped a lot with learning how to use it, and I wish
             I used something like it in 2013. The ability to have JavaScript, CSS, and HTML all in one file made it very easy to backtrack and revise
              things, so I'm glad that it worked out the way it did. 
            </p>



            <p class="pb-10">
            Something else I wish I spent more time understanding before I just jumped into it were the flexbox and grid models within CSS. 
            Multiple times throughout my project I had problems that I didn't know how to solve, and was using roundabout methods to do so 
            until I really utilized these models. But you don't know what you don't know, and sometimes it takes multiple google searches and
            hours of frustration to find what you're looking for. Maybe the real lesson is to take a free course before diving in the deep end?
            </p>

            <p class="pb-10">
            I still have a few little things to work on here and there, so I wouldn't call it finished just yet. But it's a start! I'll 
            be making small changes and updating different project pages over the next few months. Hopefully I don't forget any more semicolons.
            </p>
        </div>   
        </FadeInPage>
    </div>;
};