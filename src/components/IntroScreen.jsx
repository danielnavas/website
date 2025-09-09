import { useEffect, useState } from "react";

export const IntroScreen = ( {onComplete}) => {
        const [text, setText] = useState("");
        const fullText = "Now Loading!";

        useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
                setText(fullText.substring(0, index));
                index++;
                    if (index > fullText.length) {
                        clearInterval(interval);
                        setTimeout(() => {
                            onComplete();
                        }, 1000);  
                    }
            }, 100);            
            return () => clearInterval(interval);
        }, [onComplete]);
        {/* fade in settings for intro screen */}
    return (
        <div className="fixed inset-0 z-50 bg-#black text-teal-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>
            <div className="w-[300px] h-[4px] bg-black rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-teal-500 shadow-[0_0_100px_#355e3b] animate-loading-bar"></div>
            </div>
        </div>
    );
};
