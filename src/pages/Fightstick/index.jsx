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

             <p>With solid metal on the base and top panel, the HPS-1 seemed to be the only real solution for me if I wanted something that I could use
                at home and at tournaments. The buttons and lever are absolutely atrocious, and I knew they would have to be replaced the second I used it.
                Thankfully, the Youtube page Scanline City did a pretty comprehensive breakdown on how to mod these types of controllers, so I had a little help
                along the way. My fightstick had a different board and a few additional buttons, but everything else in the video applied.
                Step one was to desolder the buttons from the board.
            </p> 

            <div class="md:flex">
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/baseboard.jpg"/>
                        <span class="italic">Stock...</span>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/dirtyboard.jpg"/>
                        <figcaption class="italic">Desoldered with a solder sucker(don't do this)</figcaption>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/cleanboard.jpg"/>
                        <figcaption class="italic">Cleaned up with Desoldering Wick(do this instead) and Isopropyl Alcohol!</figcaption>
                </div>
            </div>

            <p class ="pb-10">Next step was to figure out how the lever connected to the board. There are 4 pairs of cables, with each color corresponding to a direction
                and the ground for it. Finding out the direction was easy enough - The FreeMcBoot softmod I had on my Ps2 had a configuration page so I could
                test inputs, but finding out which wire was the ground was a bit more complicated. My model just happened to be the one on youtube that no one ever modded, so 
                I had to put in a little more work to figure this part out. Ps2 controllers receive around 3.3V, so I bought a multimeter
                and put one wire on the capacitor and the other on the individual dots on the board for each direction, and began seeing which wires gave me a reading
                and which didn't. Please note that I had no idea what I was doing until one of my engineering friends explained to me how find out what part of the board was
                the capacitor. Sometimes it helps to have friends!
            </p> 

            <div class="md:flex gap-6">
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/inputtest.jpg"/>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/oldlever.jpg"/>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/notes.jpg"/>
                </div>
            </div>

            <p>At this point I realized I never bought cables for connecting my new buttons to the board, so while I waited for those to come in, I took all the old
                buttons out and removed the old lever. While the body of the fightstick was made well, the buttons and lever were garbage and clearly weren't meant to be modded.
                That's okay, because we have... power tools! This step was pretty stressful considering I'd never used a drill or rotary tool before, and this isn't something you
                can redo. So I lined up the plate for the lever to the best of my abilities, marked it with a sharpie, and drilled very slowly. These screws had to be countersunk
                because of the metal plate I planned for them to sit under. I saw some old youtube video where someone poorly explained the mod, and they just left the screws
                on top of the stick, so this step is optional. I still ended up being slightly off since I just eyeballed it, but the stick fit fine after counterinking one of
                the screws just a bit more. If you mess up really badly you could always use a dremel to make the hole for the lever bigger. The shaft cover would hide it anyway.
            </p> 

            <div class="md:flex gap-6">
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/lineup.jpg"/>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/drill.jpg"/>
                        <figcaption class="italic">Slightly off, but good enough!</figcaption>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/countersink.jpg"/>
                </div>
            </div>

            <p>Dremeling out the old plastic pieces for the lever was a little easier. Depending on what lever you want to use, you can remove more/less plastic
                from the housing. Originally I was going to put in a Sanwa JLF lever, but decided on a Seimitsu LS-62-01 instead. This is a compact version of the
                LS-62, meant for smaller builds. There is a circular plastic support beam next to the lever, so if I wanted a bigger stick I'd have to dremel that out.
                While I don't think it would make a huge difference in the feel, I wouldn't want the stick to feel like its bending inwards at the middle. I used a
                combination of a dremel and a sanding disc for removing the plastic.
            </p>

            <div class="md:flex gap-6">
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/leverbefore.jpg"/>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/sanded.jpg"/>
                </div>
                <div class="py-15 text-center object-center justify-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/leverafter.jpg"/>
                </div>
            </div>

            <p>After putting in the buttons and lever, all that was left was to solder the wires, do a bit of cable management, and I'd be good! Very excited at this point.
                Once the wires came in, I started soldering. You can watch as many youtube videos as you want, but sometimes you just need to stop
                procrastinating and get to it! Be careful Daniel...
            </p>

            <div class="md:flex gap-6 object-center justify-center">
                <div class="pt-15 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/solder.jpg"/>
                </div>
                <div class="pt-15 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/wires.jpg"/>
                </div>
            </div>
            <div class="text-center pb-10">
                <span class="italic">Some decent soldering for a first attempt, and jesus that's a lot of wires.</span>
            </div>

            <p>I should have cut the wires to be a bit smaller, but considering this was my first go at soldering, I left them a bit longer in case I messed up somehow.
                Thankfully everything worked out fine the first time, so it was time to solder the wires for the lever. Since sticks usually have a layout of 4 inputs
                and one ground wire, I needed to get all the ground wires from the board and twist them together so they could connect to the stick. More soldering.
                Once it dried and my tests for it worked, I wrapped them in electrical tape(you can also use heat shrink tubing). Now all that's left is to cover the
                board so it doesn't rub against the housing, taping the electrical prongs, and putting everything back together!
            </p>

            <div class="md:flex gap-6 object-center justify-center">
                <div class="pt-15 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/leverwires.jpg"/>
                </div>
                <div class="pt-15 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/tape.jpg"/>
                </div>
                <div class="pt-15 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/complete.jpg"/>
                </div>
            </div>

            <p>All in all, it looks pretty good! This was definitely not a beginner friendly project, but with a lot of help from other people and
                a lot of reading I was able to make it work. The only things I'd do differently are trim the wires in advance and use the correct size countersink.
                I just used whatever I had laying around and I bored through one of the holes just a little too much. It didn't matter in the end, but definitely use the right tool for the job! Thanks for reading.
            </p>

            <div class="md:flex gap-6 object-center justify-center">
                <div class="pt-15 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/done.jpg"/>
                </div>
                <div class="pt-15 text-center">
                        <img className="mx-auto object-scale-down object-center size-80 " alt="" src="/website/done2.jpg"/>
                </div>
            </div>
        </div>
        
            

        </RevealOnScroll>
    </div>;
};