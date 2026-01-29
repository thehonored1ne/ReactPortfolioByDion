import { useTimer, formatTime } from '../imports/organizedIndex'

const DigitalClock = () => {
    const time = useTimer();

    return (
        <div className="bg-transparent p-1 px-2 text-sm font-sans ">
            <h1>
                {formatTime(time)}
            </h1>
        </div>
    );
};

export default DigitalClock;