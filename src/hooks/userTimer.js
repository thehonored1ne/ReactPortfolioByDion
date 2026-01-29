import { useState, useEffect } from '../imports/organizedIndex';

const useTimer = () => {
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return time; // Returns the date object
};

export default useTimer;