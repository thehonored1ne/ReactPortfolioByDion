import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Set up an interval to update the state every second
        const timer = setInterval(() => {
        setTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts to prevent memory leaks
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