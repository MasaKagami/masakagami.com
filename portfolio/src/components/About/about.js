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
                    const maxGrayValue = 241;
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
        // <section id="about" className="bg-[#010101] w-screen min-h-screen">
        //     <div className="text-white w-full xl:max-w-[70%] max-w-[90%] m-auto flex flex-col md:flex-row gap-6 h-full">
        //         <div className='flex flex-col w-full md:w-1/2 gap-6 justify-center items-start m-auto'>
        //             <div className='flex flex-col gap-2 flex-grow'>
        //                 <p className='text-lg font-normal'>ABOUT ME</p>
        //                 <h1 className='text-4xl sm:text-5xl font-extrabold whitespace-nowrap'>Hi! I am Masa.</h1>
        //             </div>
        //             <div className="h-full flex flex-col flex-grow gap-5 text-base font-base">
        //                 <p>Electrical Engineering Student @ McGill
        //                     <br/>
        //                     <span className='text-sm font-extralight'>Major: Electrical Engineering<br/>
        //                     Minor: Software Engineering</span>
        //                 </p>
        //                 <div className='flex md:flex-row flex-col gap-3 items-start justify-start'>
        //                     <div className='flex gap-1'>
        //                         <a href='https://linkedin.com/in/nagamasa' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-square hover:outline-none'>
        //                             <svg role="img" viewBox="0 0 24 24" fill="#0A66C2" className='w-10 h-auto' xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>                        </a>
        //                         <a href='https://github.com/MasaKagami' alt='github' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-circle hover:outline-none'>
        //                             <svg role="img" viewBox="0 0 24 24" fill='white' className='w-10 h-auto' xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>                        </a>
        //                         <a href='https://soundcloud.com/jodyekagami' alt="soundcloud" target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-square hover:outline-none'>
        //                             <svg role="img" fill='white' className='w-10 h-auto' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SoundCloud</title><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/></svg>
        //                         </a>
        //                         <a href='https://open.spotify.com/user/masa.kagami100?si=31c8282daceb4c41' alt="spotify" target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-circle hover:outline-none'>
        //                         <svg role="img" fill="#1ED760" className='w-10 h-auto' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>                        </a>
        //                     </div>
        //                 </div>
        //                 <div id="intro-typing">
        //                     I am <span>{dynamicText}</span><span className="cursor">|</span>
        //                 </div>
        //             </div>
        //         </div>
                
        //         <div
        //             className={`w-full md:w-1/2 h-full justify-center items-center z-0 transform transition-opacity duration-1000 ${
        //             loadingComplete ? 'opacity-80' : 'opacity-0'
        //             }`}
        //         >                
        //             <img src={masa} alt="Masa Kagami" className='z-0 w-full h-auto'/>
        //         </div>
        //     </div>
        // </section>
        <section id="about" className="w-screen bg-[#010101]">
            <div className="w-full xl:max-w-[90%] max-w-[90%] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-10">
                {/* About Text */}
                <div className="flex flex-col text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-1/2 space-y-2 md:space-y-4">
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
                    className={`w-full md:w-1/2 flex justify-center items-center transform transition-opacity duration-1000 ${
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