import { useEffect, useState } from 'react';
import masa from '../../assets/masa-2.jpeg';

const About = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);
    
    useEffect(() => {
        // Simulate loading completion after 2 seconds
        const timeout = setTimeout(() => setLoadingComplete(true), 4500);
        return () => clearTimeout(timeout); // Cleanup on unmount
    }, []);
    
    useEffect(() => {
        const handleScroll = () => {
            const lines = document.querySelectorAll('.line');
            const windowHeight = window.innerHeight;
        
            lines.forEach((line) => {
                const lineTop = line.getBoundingClientRect().top;
                const lineBottom = line.getBoundingClientRect().bottom;
        
                if (lineTop < windowHeight && lineBottom > 0) {
                    // Line is in viewport
                    const scrollPercentage = (lineTop + line.offsetHeight / 2) / windowHeight;
                    const maxGrayValue = 255;
                    const grayValue = Math.floor(scrollPercentage * maxGrayValue);
                    
                line.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`; // Grayscale color
                } else {
                  // Reset to black when out of viewport
                  line.style.color = `rgb(0, 0, 0)`; // Black
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
      
    return(
        <section id="about" className="w-screen bg-[#010101] overflow-x-hidden">
            <div className="w-full xl:max-w-[90%] max-w-[90%] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-10 overflow-x-hidden">
                {/* About Text */}
                <div className="flex flex-col text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-1/2 space-y-2 md:space-y-4 overflow-x-hidden-">
                    {[
                        "Born and raised in Bangkok,",
                        "Thailand, as a Japanese",
                        "national, Masa brings a unique",
                        "cultural perspective to his",
                        "work. Currently studying",
                        "Electrical Engineering with",
                        "a minor in Software",
                        "Engineering at McGill",
                        "University, he combines",
                        "technical expertise and",
                        "creativity to craft innovative",
                        "and user-focused digital",
                        "experiences."
                    ].map((line, index) => (
                        <span key={index} className="line whitespace-nowrap font-geologica font-base lg:font-light">
                            {line}
                        </span>
                    ))}
                </div>
                {/* Image */}
                <div
                    className={`w-full md:w-1/2 flex justify-center items-center transform transition-opacity duration-1000 overflow-x-hidden ${
                    loadingComplete ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={masa}
                        alt="Masa Kagami"
                        className="z-0 w-[90%] lg:w-[70%] h-auto border-black outline-none rounded-full bg-[#f1f1f1]"
                    />
                </div>
            </div>
        </section>



    )
}

export default About