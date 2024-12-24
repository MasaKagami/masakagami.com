import { useEffect, useState } from "react";

const Loader = ({setLoadingComplete}) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        // Increment the count every 30ms
        const interval = setInterval(() => {
            setCount((prevCount) => {
            if (prevCount >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                setLoadingComplete(true); // Notify parent to hide loader
                }, 1000); // Add small delay before hiding loader
                return prevCount;
            }
            return prevCount + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [setLoadingComplete]);

    return (
        <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-black z-50 text-white sm:text-[15rem] text-9xl md:text-[20rem] font-semibold">
            <span className="animate-pulse-1 font-geologica">{count}%</span>
        </div>
    );
}

export default Loader