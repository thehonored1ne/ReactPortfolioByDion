import { useMusicPlayer, formatAudioTime, playlist, win95Styles, FileIcons } from '../imports/organizedIndex'

const MusicPlayer = () => {
    
    const {
        currentTrack, currentTrackIndex, setCurrentTrackIndex,
        isPlaying, setIsPlaying, progress, setProgress,
        duration, setDuration, audioRef, togglePlay, skipTrack
    } = useMusicPlayer(playlist);

    return (
 
        <div style={{ ...win95Styles.container, backgroundImage: `url(${currentTrack.bg})` }} className="p-2 bg-cover bg-no-repeat">

            {/* Container */}
            <div className=" h-full flex flex-col ">

                <div className="flex items-center gap-3">
                    <img src={currentTrack.cover} alt="art" className="size-50 border-2"/>
                    <div className="w-50">
                        <h1 className="font-bold text-4xl">{currentTrack.title}</h1>
                        <h3 className="font-bold">{currentTrack.artist}</h3>
                    </div>
                </div>

                <div className="my-3">
                    <input 
                        type="range" min="0" max={duration || 0} value={progress} 
                        onChange={(e) => {
                            const time = Number(e.target.value);
                            audioRef.current.currentTime = time;
                            setProgress(time);
                        }} 
                        style={win95Styles.range}
                    />
                    <div className="flex justify-between text-sm font-bold mt-1 text-black">
                        <span>{formatAudioTime(progress)}</span>
                        <span>{formatAudioTime(duration)}</span>
                    </div>
                </div>

                <div className="flex gap-1 mb-3 w-full justify-center">
                    <div className="flex items-center justify-center gap-2 p-2">
                        <button onClick={() => skipTrack('prev')} className="text-black text-4xl cursor-pointer" >⏮︎</button>
                        <button onClick={togglePlay} style={win95Styles.button} className="mx-5 cursor-pointer size-15">
                            {isPlaying ? <img src={FileIcons.pauseBtn} alt="pause"/> : <img src={FileIcons.playBtn} alt="play"/>}
                        </button>
                        <button onClick={() => skipTrack('next')} className="text-black text-4xl cursor-pointer" >⏭︎</button>
                    </div>

                </div>

                {/* Wrapper */}
                <div className="border-2 h-50 overflow-auto bg-black">

                    <div className="">
                        {/* playlist grid*/}
                        {playlist.map((track, index) => (
                            <div 
                                key={track.id} 
                                onClick={() => { setCurrentTrackIndex(index); setIsPlaying(false); }}
                                style={{ 
                                    ...win95Styles.listItem, 
                                    backgroundColor: index === currentTrackIndex ? '#000080' : 'transparent',
                                    color: index === currentTrackIndex ? 'white' : 'black',
                                }}
                            >
                                <img src={track.cover} alt="cover" className="size-15"/> <div className="mx-5">{track.artist} - {track.title}</div>
                            </div>
                        ))}

                    </div>

                </div>

                <audio 
                    ref={audioRef} 
                    src={currentTrack.src} 
                    onTimeUpdate={() => setProgress(audioRef.current.currentTime)}
                    onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                    onEnded={() => skipTrack('next')} 
                />

            </div>

        </div>

    );
};

export default MusicPlayer