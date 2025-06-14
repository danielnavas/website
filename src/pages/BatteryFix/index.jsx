import FadeInPage from "../../components/FadeInPage";

export const BatteryFix = () => {
  
    return <div className="p-10 md:p-25">
        <FadeInPage>
        <div className="flex mx-auto flex-col-reverse md:flex-row items-center justify-center max-w-5xl md:h-96 px-4 word-wrap:break-word text:balance">
            <div className="text-center md:text-left sm:flex-col md:flex-row max-w-xl"> 
                <h3 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-600
                bg-clip-text text-transparent">Video Game Battery Replacement</h3>  
                <p className="text-gray-400 mb-4 md:pr-4">Using my newfound soldering skills to bring some absurdly expensive video games back to life.</p>  
                <div className="flex flex-wrap justify-center md:justify-normal gap-2 mb-4">
                    {["Soldering", "Electronics", "Overpriced Collectibles...seriously"].map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm
                        hover:blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        {tech}
                        </span>
                    ))}    
                </div>
            </div> 
            <div>
                <img className="object-scale-down pb-8 md:pb-0 pl-0 md:pl-2 size-96" alt="" src="/website/home/battery.jpg"/>
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
                a friend of mine had a few copies of different pokemon games with dead batteries. In exchange for fixing them, they offered to give me a copy of pokemon silver.
                They also provided the batteries, so I had everything I needed.
            </p> 

            <div class="pb-10 text-center object-center justify-center">
                <img className="mx-auto object-cover size-120" alt="" src="/website/batteryfix/batterytools.jpg"/>
                <span class="italic">Surgical Tools...</span>
            </div>

            <p class="pb-10">
            Just for fun I decided to check the charge on some of these to see if they still had any juice in them. All the 2nd gen games were out, but surprisingly all
            the first gen games had a ton of life left! The minimum voltage required for the SRAM to retain save data is around 2 volts, and every 1st gen game had 3-3.1 volts
            left. I don't know how much play these games had, but 1st gen games drain battery a lot more slowly since they only use the battery when saving. 2nd gen games use the
            SRAM as well, but it's constantly being drained whenever you play the game due to the game's day and night cycle and different events like the Goldenrod underground passage.
            Gen 3 games use a Flash RAM chip to save, so even if your battery dies, you'll still be able to save and play the game. The battery for those is only responsible for
            time-based events.
            </p>

            <div class="md:flex object-center justify-center">
                <div class="p-10 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/batteryfix/alivebattery.jpg"/>
                        <span class="italic">All the gen 1 games looked pretty healthy!</span>
                </div>
                <div class="p-10 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/batteryfix/deadbattery.jpg"/>
                        <span class="italic">Gen 2. Absolutely dead.</span>
                </div>
            </div>

            <p class="pb-10">There's not too much to this, you just need to be careful when you begin using your soldering iron. I'll break down the steps below.
                I should also note that while the original project was for installing batteries on Game Boy/Game Boy Color games, the photos below go over feature
                the Game Boy Advance video game Megaman Zero. The first set of pictures I took with Pokemon Crystal didn't cover everything so I got another game to work on.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row gap-6 pb-10">
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                    <div>
                        <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/removedcase.jpg" />
                    </div>
                    <p className="text-gray-400">1: Remove your board from the plastic case! Don't solder with your board still inside it or else you risk melting
                        it with your soldering iron. This game appears to have been dipped in coffee and had a bug inside it?? Sorry little guy.
                    </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/applyflux.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">2: Apply flux to solder joints. Don't be stingy! More is better here.
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/pullbattery.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">3: Grab a pair of tweezers, and while holding the battery with them, heat up one of the joints
                            and pull your battery away gently. Do this one joint at a time. Don't apply too much pressure or else you'll burn the board!
                            Be extra careful when working with Game Boy Advance carts, and change the orientation of your game or iron if you need to. In the above image
                            you should move the soldering iron so it's not directly underneath the C6 chip. Putting these back on if you've desoldered them can be tricky.
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/cleansolder.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">4: Clean up any remaining solder by applying flux to the tabs and using a desoldering wick to suck up the
                            solder. You want to place the iron directly onto the wick, and move the wick around as it takes in the old solder. If you leave the wick
                            in the same place for too long you'll cause the wick to stick to the board. This can be fixed by applying more flux and trying again.
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/cleanboard.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">5: Use Isopropyl Alcohol to clean up any residue. Be careful to not get any on the chips or else you can
                            wipe away the text!
                        </p>  
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/home/battery.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">6: Test your battery BEFORE soldering it onto the board! I tested it after the fact for my copy of Crystal,
                            and I was sweating bullets when I realized that I hadn't tested it. It worked out fine, but please
                            save yourself the headache and don't be like me...
                        </p>  
                </div>     
                
                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/polarity.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">7: Apply flux and put your new battery on your board. Pay attention to the polarity and put the tabs
                             in the correct orientation. Put the plus tab on the plus contact, and put the minus tab on the minus one.
                        </p>
                </div>                              

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/solderbattery.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">8: Get soldering! This is a little different than through hole soldering, where you don't
                            need to move the solder at all. For soldering on a flat surface you need to push/feed the solder into the battery tab as
                            you heat up your contact. The solder will melt away and your wire will get shorter, but that's okay since you'll be pushing
                            more solder into the area.
                        </p>
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/cleanagain.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">9: Clean up any remaining flux with Isopropyl alochol again. Almost there!
                        </p>
                </div>

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/done.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">10: Pop that beautiful masterpiece of yours back into the case and close it up.
                        </p>
                </div>                

                <div className="p-6 rounded-xl border border-white/20 
                    hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_5px_50px_rgba(0,128,128,0.3)] transition">
                        <div>
                            <img class="object-scale-down inline size-60 mb-4" alt="" src="/website/batteryfix/savedgame.jpg" />
                        </div>
                        <p className="text-gray-400 mb-4">11: Test to make sure your game works and enjoy!
                        </p>
                </div>  

            </div>

            <div class="py-15 text-center object-center justify-center">
                <img className="mx-auto object-scale-down object-center" alt="" src="/website/batteryfix/replacedbatteries.jpg"/>
                <span class="italic">Looking pretty good!</span>
            </div>

            <div class="md:float-right md:pl-10 pb-10 text-center object-center justify-center">
                    <img className="mx-auto object-scale-down size-48" alt="" src="/website/batteryfix/glitch.png"/>
                    <figcaption class="italic overflow:visible">That's a freaky game alright.</figcaption>
            </div>
            
            <p class="pb-10">
            After typing everything out there actually might be more to this than I originally expected. I want to emphasize that you really don't need to press down
            with the soldering iron for too long or too hard. Also, be sure to take a really good look at your board after you've soldered the new battery. There's a
            small chance that some solder may have gotten onto some of the solder for the other chips, and depending on how much got on it, you could get some wacky glitches
            here and there. 
            </p>

            <p class="pb-10">
            I just reflowed the solder again and it distributed it evenly so there weren't any
            connections between the solder joints. You could also check for continuity on each of the chips, but if you don't see anything, it's probably fine.
            Just be patient and use lots of flux!
            </p>          
            
        </div>

        </FadeInPage>
    </div>;
};