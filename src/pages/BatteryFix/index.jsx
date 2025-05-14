import FadeInPage from "../../components/FadeInPage";

export const BatteryFix = () => {
  
    return <div className="items-center justify-center p-20 md:p-25">
        <FadeInPage>
        <div className="flex mx-auto flex-col-reverse md:flex-row items-center justify-center max-w-5xl md:h-96 px-4 word-wrap:break-word text:balance">
            <div className="text-center md:text-left sm:flex-col md:flex-row max-w-xl"> 
                <h3 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600
                bg-clip-text text-transparent">Video Game Battery Replacement</h3>  
                <p className="text-gray-400 mb-4 md:pr-4">Using my newfound soldering skills to bring some absurdly expensive video games back to life.</p>  
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Soldering", "Electronics", "Overpriced Collectibles...seriously"].map((tech, key) => (
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
                <img className="object-scale-down rounded-md pb-8 md:pb-0 size-96" alt="" src="/website/battery.jpg"/>
            </div>
            
              
        </div> 
     
        <hr className="m-auto h-[2px] mt-10 bg-gray-400 max-w-5xl border-0"></hr>
    
        <div className="text-center text-gray-400 md:text-left max-w-5xl mx-auto px-4 py-10">
            <p class="pb-10">
                    After successfully soldering everything onto my fighstick, I felt pretty confident in my abilities to work on simple projects now. Also,
                    I think I spent around 100 bucks getting all the soldering tools required, and I didn't want them to just rot in a box after one project.
                    My next idea was to replace the battery on my old copy of Pokemon Crystal for the Game Boy Color. This died sometime around 2006, so it's
                    nearly been 20 years since it was last used!
            </p>


             <p class="pb-10"> For those blissfully unaware about the current state of the retro video game market, a working copy of Pokemon crystal goes for around 150
                dollars, and that's not including any of the packaging. Sometimes they don't even have a working battery! Even though I'm an adult and could have spent the
                money to get a working copy long ago, I refused to make scalpers richer just because I wasn't able to fix my own copy. But it's time to get to work! This time,
                a friend of mine had a few copies of different pokemon games with dead batteries. In exchange for fixing them, they offered to give me a copy of pokemon silver for free!
                They also provided the batteries, so I had everything I needed.
            </p> 

                        <div class="py-15 text-center object-center justify-center">
                    <img className="mx-auto object-scale-down object-center " alt="" src="/website/batterytools.jpg"/>
                    <span class="italic">Desoldering wick, flux, screwdriver, solder, tweezers to hold the battery, and q-tips to clean everything up!</span>
            </div>

            <p class="pb-10">
            Just for fun I decided to check the charge on some of these to see if they still had any juice in them. All the 2nd gen games were out, but surprisingly all
            the first gen games had a ton of life left! The minimum voltage required for the SRAM to retain save data is around 2 volts, and every 1st gen game had 3.1-3.2 volts
            left. I don't know how much play these games had, but 1st gen games drain battery a lot faster since they only use the battery when saving. 2nd gen games use the
            battery for the real-time clock system as well, and that's constantly running whenever your game is on.
            </p>

            <div class="py-15 text-center object-center justify-center">
                    <img className="mx-auto object-scale-down object-center " alt="" src="/website/oldwebsite.png"/>
                    <span class="italic">Not bad for the time, but my brain is developed now</span>
            </div>

            <p class="pb-10">There's not too much to this, you just need to be careful when you begin using your soldering iron. I'll break down the steps here:
            <ol class="list-decimal">
                    <li>Remove your board from the plastic case! Don't solder with your board still inside it or else you risk melting it with your soldering iron.</li>
                    <li>Apply flux to solder joints.</li>
                    <li>Grab a pair of tweezers, and while holding the battery with them, heat up one of the joints and pull your battery away gently. Do this
                    one joint at a time. Don't apply too much pressure or else you'll burn the board!</li>
                    <li>Put your new battery on in the correct orientation and use a multimeter to make sure it works. It would be pretty annoying to solder on another
                    dead battery.</li>
                    <li>Apply flux to the joints again.</li>
                    <li>Put your desoldering wick onto your contact, and heat it up with a soldering iron. Be sure to move the wick around a little while doing this, or
                    else you'll heat the wick up too much and it will stick to the board.</li>
                    <li>use a Q-tip and Isopropyl Alcohol to clean up the mess.</li>
                    <li>Apply flux again!</li>
                    <li>Put your new battery on your board. Pay attention to the polarity and put the tabs in the correct orientation. Put the plus tab(the one on top)
                    on the plus contact, and put the minus tab (the one underneath the battery) on the minus one.</li>
                    <li>Get soldering! This is a little different than through hole soldering, where you don't need to move the solder at all. For soldering on a flat
                    surface you need to push/feed the solder into the battery tab as you heat up your contact. The solder will melt away and your wire will get shorter,
                    but that's okay since you'll be pushing more solder into the area.</li>
                    <li>Clean up any remaining flux with Isopropyl alochol again.</li>
                    <li>Test your battery with a multimeter to make sure everything works or just try saving your new game. Hooray!</li>
                </ol>
            </p>



            <div class="md:flex object-center justify-center">
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-96 " alt="" src="/website/responsivebook.png"/>
                        <span class="italic">I still can't believe I used to do this in 2013.</span>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-96 " alt="" src="/website/breakpoints.png"/>
                        <figcaption class="italic">God bless breakpoints...</figcaption>
                </div>
      
            </div>

            <p class="pb-10">
            After typing everything out there actually might be more to this than I originally expected. But none of the steps are too complicated. Just be patient
            and use lots of flux! Thanks for reading.
            </p>

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