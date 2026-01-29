// import { useMusicPlayer, formatAudioTime, playlist, win95Styles} from '../imports/organizedIndex'

// const MusicPlayer = () => {
    
//     const {
//         currentTrack, currentTrackIndex, setCurrentTrackIndex,
//         isPlaying, setIsPlaying, progress, setProgress,
//         duration, setDuration, audioRef, togglePlay, skipTrack
//     } = useMusicPlayer(playlist);

//     return (

            
//         <div style={win95Styles.container} className="relative p-2 w-80 md:w-120 lg:w-150 h-140 z-999">

//             <div style={{ backgroundImage: `url(${currentTrack.cover})` }} className="absolute overflow-hidden inset-0 bg-cover bg-center bg-no-repeat blur-md scale-110 "/>

//             <div className="absolute z-10 h-full overflow-hidden">

//             {/* 1. Track Info Section */}
//             <div className="flex flex-col items-center font-mono text-white">
//                 <img src={currentTrack.cover} alt="art" className="size-40 rounded-md my-2 border-2 border-t-white border-l-white shadow-inner"/>
//                 <h1 className="font-bold text-lg truncate w-full text-center">{currentTrack.title}</h1>
//                 <h3 className="text-white">{currentTrack.artist}</h3>
//             </div>

//             {/* 2. Progress Section */}
//             <div className="my-3">
//                 <input 
//                     type="range" min="0" max={duration || 0} value={progress} 
//                     onChange={(e) => {
//                         const time = Number(e.target.value);
//                         audioRef.current.currentTime = time;
//                         setProgress(time);
//                     }} 
//                     style={win95Styles.range}
//                 />
//                 <div className="flex justify-between text-xs font-bold mt-1 text-white">
//                     <span>{formatAudioTime(progress)}</span>
//                     <span>{formatAudioTime(duration)}</span>
//                 </div>
//             </div>

//             {/* 3. Controls */}
//             <div className="flex gap-1 mb-3 w-full justify-center">
//                 <div className="flex items-center justify-center gap-2 p-2">
//                     <button onClick={() => skipTrack('prev')} className="text-white text-3xl cursor-pointer" >⏮︎</button>
//                     <button onClick={togglePlay} style={win95Styles.button} className="mx-5 py-4 px-6.5 cursor-pointer">
//                         {isPlaying ? '⏸︎' : '▶'}
//                     </button>
//                     <button onClick={() => skipTrack('next')} className="text-white text-3xl cursor-pointer" >⏭︎</button>
//                 </div>

//             </div>

//             {/* 4. Playlist Selection */}
//             <div style={win95Styles.playlistBox}>
//                 {playlist.map((track, index) => (
//                     <div 
//                         key={track.id} 
//                         onClick={() => { setCurrentTrackIndex(index); setIsPlaying(false); }}
//                         style={{ 
//                             ...win95Styles.listItem, 
//                             backgroundColor: index === currentTrackIndex ? '#000080' : 'transparent',
//                             color: index === currentTrackIndex ? 'white' : 'black',
//                         }}
//                     >
//                         {index + 1}. {track.title}
//                     </div>
//                 ))}
//             </div>

//             <audio 
//                 ref={audioRef} 
//                 src={currentTrack.src} 
//                 onTimeUpdate={() => setProgress(audioRef.current.currentTime)}
//                 onLoadedMetadata={() => setDuration(audioRef.current.duration)}
//                 onEnded={() => skipTrack('next')} 
//             />

//             </div>


//         </div>

//     );
// };

// export default MusicPlayer