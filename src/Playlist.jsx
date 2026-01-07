    import React, { useState, useRef, useEffect } from 'react';

    const playlist = [
    { id: 0, title: "As The World Caves In", artist: "Matt Maltese", src: "/music/music1.mp3", cover: "/cover/CoverAsTheWorldCavesIn.png" },
    { id: 1, title: "It Will Rain", artist: "Bruno Mars", src: "/music/music3.mp3", cover: "/cover/CoverItWillRain.png" },
    { id: 2, title: "Pagsuko", artist: "Jireh Lim", src: "/music/music2.mp3", cover: "/cover/CoverPagsuko.jpg" },
    { id: 3, title: "Running", artist: "Gaho", src: "/music/music4.mp3", cover: "/cover/CoverRunning.jpg" },
    { id: 4, title: "Slip Away", artist: "Johnny Valentine", src: "/music/music5.mp3", cover: "/cover/CoverSlipAway.jpg" },
    { id: 5, title: "Dramaturgy", artist: "Eve", src: "/music/music6.mp3", cover: "/cover/CoverDramaturgy.jpg" },
    ];

    const MusicPlayer = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const currentTrack = playlist[currentTrackIndex];

    // Update progress bar
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

    return (
        <div>

            <div style={{ padding: '10px' }}>
                {/* Album Art & Track Info */}
                <div style={win95Styles.screen}>
                <img src={currentTrack.cover} alt="art" style={win95Styles.art} />
                <div style={{ overflow: 'hidden' }}>
                    <div style={win95Styles.scrollingText}>{currentTrack.title} - {currentTrack.artist}</div>
                </div>
                </div>

                {/* Progress Bar */}
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

                {/* Controls */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
                <button onClick={() => skipTrack('prev')} style={win95Styles.button}>Prev</button>
                <button onClick={togglePlay} style={win95Styles.button}>
                    {isPlaying ? 'Stop' : 'Play'}
                </button>
                <button onClick={() => skipTrack('next')} style={win95Styles.button}>Next</button>
                </div>

                {/* Scrollable Song List */}
                <div style={win95Styles.playlistBox}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {playlist.map((track, index) => (
                            <li 
                                key={track.id} 
                                onClick={() => { setCurrentTrackIndex(index); setIsPlaying(false); }}
                                style={{ 
                                ...win95Styles.listItem, 
                                backgroundColor: index === currentTrackIndex ? '#000080' : 'transparent',
                                color: index === currentTrackIndex ? 'white' : 'black'
                                }}
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

    // Windows 95 Styling Objects
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
        fontSize: '12px',
        flex: 1
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