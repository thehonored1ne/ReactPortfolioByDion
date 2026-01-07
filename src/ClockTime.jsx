import { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (
        <div className="bg-transparent p-1 px-2 text-sm font-sans">
            <h1>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </h1>
        </div>
    );
};

export default DigitalClock;