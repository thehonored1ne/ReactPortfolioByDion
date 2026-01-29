import { useState, useRef, useEffect } from '../imports/organizedIndex';

export const useMusicPlayer = (playlist) => {

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const currentTrack = playlist[currentTrackIndex];

    const togglePlay = () => {
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const skipTrack = (direction) => {
        let nextIndex = direction === 'next' ? currentTrackIndex + 1 : currentTrackIndex - 1;
        if (nextIndex >= playlist.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = playlist.length - 1;
        
        setCurrentTrackIndex(nextIndex);
        setIsPlaying(false);
    };

    useEffect(() => {
        if (isPlaying) audioRef.current.play();
    },[currentTrackIndex, isPlaying]);

    return {
        currentTrack,
        currentTrackIndex, setCurrentTrackIndex,
        isPlaying, setIsPlaying,
        progress, setProgress,
        duration, setDuration,
        audioRef,
        togglePlay,
        skipTrack
    };
};