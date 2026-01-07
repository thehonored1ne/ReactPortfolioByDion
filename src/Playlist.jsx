import { useState, useRef } from 'react';

const playlist = [
    { id: 0, title: "As The World Caves In", artist: "Matt Maltese", src: "/music/AsTheWorldCavesIn.mp3", cover: "/cover/CoverAsTheWorldCavesIn.png" },
    { id: 1, title: "It Will Rain", artist: "Bruno Mars", src: "/music/ItWillRain.mp3", cover: "/cover/CoverItWillRain.png" },
    { id: 2, title: "Pagsuko", artist: "Jireh Lim", src: "/music/Pagsuko.mp3", cover: "/cover/CoverPagsuko.jpg" },
    { id: 3, title: "Running", artist: "Gaho", src: "/music/Running.mp3", cover: "/cover/CoverRunning.jpg" },
    { id: 4, title: "Slip Away", artist: "Johnny Valentine", src: "/music/SlipAway.mp3", cover: "/cover/CoverSlipAway.jpg" },
    { id: 5, title: "Dramaturgy", artist: "Eve", src: "/music/Dramaturgy.mp3", cover: "/cover/CoverDramaturgy.jpg" },
];

const MusicPlayer = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const currentTrack = playlist[currentTrackIndex];

    const handleTimeUpdate = () => {
        setProgress(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const time = Number(e.target.value);
        audioRef.current.currentTime = time;
        setProgress(time);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
            setIsPlaying(!isPlaying);
        };

    const skipTrack = (direction) => {
        let nextIndex = direction === 'next' ? currentTrackIndex + 1 : currentTrackIndex - 1;
        if (nextIndex >= playlist.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = playlist.length - 1;
        setCurrentTrackIndex(nextIndex);
        setIsPlaying(false);
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>

            <div style={{ padding: '10px' }}>

                <div className="flex flex-col justify-center items-center font-mono">
                    <img src={currentTrack.cover} alt="art" className="size-70 rounded-md my-2 border-2 border-t-white border-l-white"/>
                    <h1 className="font-bold text-2xl my-2">{currentTrack.title}</h1>
                    <h3 className="text-xl text-gray-700">{currentTrack.artist}</h3>
                </div>

                <div style={{ margin: '10px 0' }}>
                    <input 
                        type="range" 
                        min="0" 
                        max={duration || 0} 
                        value={progress} 
                        onChange={handleSeek} 
                        style={win95Styles.range}
                    />
                </div>

                <div className="flex justify-between my-2 font-bold">
                    <span>{formatTime(progress)}</span>
                    <span>{formatTime(duration)}</span>
                </div>

                <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
                    <button onClick={() => skipTrack('prev')} style={win95Styles.button}> Prev</button>
                    <button onClick={togglePlay} style={win95Styles.button}>
                        {isPlaying ? 'Stop' : 'Play'}
                    </button>
                    <button onClick={() => skipTrack('next')} style={win95Styles.button}>Next </button>
                </div>

                <div style={win95Styles.playlistBox}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        { playlist.map((track, index) => (
                            <li 
                                key={track.id} 
                                onClick={() => { setCurrentTrackIndex(index); setIsPlaying(false); }}
                                style={
                                    { 
                                        ...win95Styles.listItem, 
                                        backgroundColor: index === currentTrackIndex ? '#000080' : 'transparent',
                                        color: index === currentTrackIndex ? 'white' : 'black',
                                        padding: '6px'
                                    }
                                }
                            >
                                {index + 1}. {track.title} - {track.artist}
                            </li>
                            ))}
                    </ul>
                </div>

            </div>

            <audio 
                ref={audioRef} 
                src={currentTrack.src} 
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => skipTrack('next')} 
            />
        </div>
    );
};

const win95Styles = {
    container: {
        backgroundColor: '#c0c0c0',
        width: '320px',
        border: '2px solid',
        borderBottomColor: '#404040',
        borderRightColor: '#404040',
        borderTopColor: '#dfdfdf',
        borderLeftColor: '#dfdfdf',
        fontFamily: '"MS Sans Serif", Tahoma, sans-serif',
        boxShadow: '1px 1px 0 0 black',
    },
    closeBtn: {
        width: '16px',
        height: '14px',
        backgroundColor: '#c0c0c0',
        border: '1px solid white',
        borderRightColor: 'black',
        borderBottomColor: 'black',
        fontSize: '9px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        backgroundColor: 'black',
        color: '#00ff00',
        padding: '5px',
        border: '2px inset #dfdfdf',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        height: '60px'
    },
    art: {
        width: '50px',
        height: '50px',
        border: '1px solid #555'
    },
    button: {
        backgroundColor: '#c0c0c0',
        border: '2px solid',
        borderTopColor: '#dfdfdf',
        borderLeftColor: '#dfdfdf',
        borderRightColor: '#404040',
        borderBottomColor: '#404040',
        padding: '4px 10px',
        cursor: 'pointer',
        fontSize: '15px',
        flex: 1,
        fontWeight: 'bold'
    },
    range: {
        width: '100%',
        cursor: 'pointer'
    },
    playlistBox: {
        backgroundColor: 'white',
        border: '2px inset #dfdfdf',
        height: '100px',
        overflowY: 'scroll',
        fontSize: '12px',
        color: 'black'
    },
    listItem: {
        padding: '2px 5px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
};

export default MusicPlayer;