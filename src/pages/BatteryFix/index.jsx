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
                <img className="object-scale-down rounded-md pb-8 md:pb-0 size-96" alt="" src="/website/home/battery.jpg"/>
            </div>        
        </div> 
     
        <hr className="m-auto h-[2px] mt-10 bg-gray-400 max-w-5xl border-0"></hr>
    
        <div className="text-center text-gray-400 md:text-left max-w-5xl mx-auto px-4 py-10">
            <p class="pb-10">
                Hello! After successfully soldering everything onto my fighstick, I felt pretty confident in my abilities to work on simple projects now. Also,
                I think I spent around 100 bucks getting all the soldering tools required and didn't want them to just rot in a box after one project.
                My next idea was to replace the battery on my old copy of Pokemon Crystal for the Game Boy Color. This died sometime around 2006, so it's
                been close to 20 years since it was last used!
            </p>


             <p class="pb-10">
                For those blissfully unaware about the current state of the retro video game market, a working copy of Pokemon crystal goes for around 150
                dollars, and that's not including any of the packaging. Sometimes they don't even have a working battery! Even though I'm an adult and could have spent the
                money to get a working copy long ago, I refused to make scalpers richer just because I wasn't able to fix my own copy. But it's time to get to work! This time,
                a friend of mine had a few copies of different pokemon games with dead batteries. In exchange for fixing them, they offered to give me a copy of pokemon silver for free!
                They also provided the batteries, so I had everything I needed.
            </p> 

            <div class="py-15 text-center object-center justify-center">
                <img className="mx-auto object-scale-down object-center " alt="" src="/website/batteryfix/batterytools.jpg"/>
                <span class="italic">Desoldering wick, flux, screwdriver, solder, tweezers to hold the battery, and q-tips to clean everything up!</span>
            </div>

            <p class="pb-10">
            Just for fun I decided to check the charge on some of these to see if they still had any juice in them. All the 2nd gen games were out, but surprisingly all
            the first gen games had a ton of life left! The minimum voltage required for the SRAM to retain save data is around 2 volts, and every 1st gen game had 3.1-3.2 volts
            left. I don't know how much play these games had, but 1st gen games drain battery a lot more slowly since they only use the battery when saving. 2nd gen games use the
            battery for the real-time clock system as well, and that's constantly running whenever your game is on.
            </p>

            <div class="py-15 text-center object-center justify-center">
                    <img className="mx-auto object-scale-down object-center " alt="" src="/website/oldwebsite.png"/>
                    <span class="italic">Not bad for the time, but my brain is developed now</span>
            </div>

            <p class="pb-10">There's not too much to this, you just need to be careful when you begin using your soldering iron. I'll break down the steps below.
                I should also note that while the original project was for installing batteries on Game Boy/Game Boy Color games, the photos below go over feature
                the Game Boy Advance video game Megaman Zero. The first set of pictures I took with Pokemon Crystal didn't cover everything so I wanted to make sure
                I was as detailed as possible. Somehow I forgot to take a picture of testing the battery beforehand. So here is your reminder! Use a multimeter
                to test your battery and make sure it's not dead on arrival. Then follow the steps below and you too can have fun catching small digital creatures again.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row gap-6 pb-10">
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                    <div>
                        <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/removedcase.jpg" />
                     </div>
                    <p className="text-gray-400">1: Remove your board from the plastic case! Don't solder with your board still inside it or else you risk melting
                        it with your soldering iron. This game appears to have been dipped in coffee and somehow still runs, but wow this has seen better days.
                    </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/applyflux.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">2: Apply flux to solder joints. Don't be stingy! More is better here.
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/pullbattery.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">3: Grab a pair of tweezers, and while holding the battery with them, heat up one of the joints
                            and pull your battery away gently. Do this one joint at a time. Don't apply too much pressure or else you'll burn the board!
                            Be extra careful when working with Game Boy Advance carts, and change the orientation of your game or solder if you need to. In the above image
                            you could move the soldering iron so it's not directly underneath the C6 chip. Putting these back on if you've desoldered them can be tricky.
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/cleansolder.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">4: Clean up any remaining solder by applying flux to the tabs and using a desoldering wick to suck up the
                            solder. You want to place the iron directly onto the wick, and move the wick around as it takes in the old solder. If you leave the wick
                            in the same place for too long you'll cause the wick to stick to the board. This can be fixed by applying more flux and going through
                            the same process again.
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/cleanboard.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">5: Use Isopropyl Alcohol to clean up any residue. Be careful to not get any on the chips or else you can
                            wipe away the text!
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/home/battery.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">6: Test your battery BEFORE soldering it onto the board! I tested it after the fact for my copy of Crystal,
                            and I was sweating bullets when I realized that I hadn't tested it. It worked out fine, but please
                            save yourself the headache and don't be like me...
                        </p>  
                </div>     
                
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/polarity.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">7: Apply flux and put your new battery on your board. Pay attention to the polarity and put the tabs
                             in the correct orientation. Put the plus tab on the plus contact, and put the minus tab on the minus one.
                        </p>
                </div>                              

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/solderbattery.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">8: Get soldering! This is a little different than through hole soldering, where you don't
                            need to move the solder at all. For soldering on a flat surface you need to push/feed the solder into the battery tab as
                            you heat up your contact. The solder will melt away and your wire will get shorter, but that's okay since you'll be pushing
                            more solder into the area.
                        </p>
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/cleanagain.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">9: Clean up any remaining flux with Isopropyl alochol again. Almost there!
                        </p>
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition-all">
                        <div>
                            <img class="object-scale-down size-48 rounded-md mb-4" alt="" src="/website/batteryfix/done.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">10: Pop that beautiful masterpiece of yours back into the case and close it up!
                        </p>
                </div>                



            </div>

                    <p>Get soldering! This is a little different than through hole soldering, where you don't need to move the solder at all. For soldering on a flat
                    surface you need to push/feed the solder into the battery tab as you heat up your contact. The solder will melt away and your wire will get shorter,
                    but that's okay since you'll be pushing more solder into the area.</p>
                    <p>Clean up any remaining flux with Isopropyl alochol again.</p>
                    <p>Test your battery with a multimeter to make sure everything works or just try saving your new game. Hooray!</p>

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