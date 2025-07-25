import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AboutVideo from '../../../public/videos/aboutvideo.mp4';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const hideTimeoutRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    handleControlVisibility();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    handleControlVisibility();
  };

  const toggleFullscreen = () => {
    const container = videoRef.current.parentElement;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    handleControlVisibility();
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.nativeEvent.offsetX;
    const width = progressBar.offsetWidth;
    const percentage = clickPosition / width;
    const newTime = percentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    handleControlVisibility();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleControlVisibility = () => {
    setShowControls(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.play();
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full md:w-[100%] xl:w-[100%] aspect-video relative overflow-hidden rounded-b-xl md:rounded-b-2xl shadow-2xl group mx-auto">

      {/* SEO Helmet Tags */}
      <Helmet>
        <title>Interactive Video - About Our Services | Infinoid</title>
        <meta name="description" content="Watch our company overview video to learn how Infinoid transforms businesses with cutting-edge technology and smart solutions." />
        <meta name="keywords" content="Tech Company Video, IT Services Overview, Infinoid Video, Company Introduction, Technology Transformation" />
        <meta name="author" content="Infinoid" />
        <meta property="og:title" content="About Infinoid - Watch Our Journey" />
        <meta property="og:description" content="Discover how Infinoid empowers clients through innovation in this engaging video overview." />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content="https://infinoid.com/about" />
        <meta property="og:video" content="https://infinoid.com/video/aboutvideo.mp4" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Video Player */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        onClick={togglePlay}
        muted={isMuted}
        className="absolute inset-0 w-full h-full object-cover scale-105 md:scale-100"
      >
        <source src={AboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out z-30
          ${showControls ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}
          md:opacity-0 md:scale-100 md:group-hover:opacity-100 md:group-hover:scale-105`}
      >
        <div className="flex flex-col items-center bg-black/40 backdrop-blur-xl px-8 py-2 rounded-full shadow-xl border border-purple-500/20 space-y-1 w-[85vw] md:w-[60vw] max-w-[700px]">
          {/* Buttons */}
          <div className="flex justify-between items-center w-full space-x-3 px-2">
            <button onClick={togglePlay} title="Play/Pause" className="text-purple-400 hover:text-purple-300">
              {isPlaying ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M10 9v6m4-6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <button onClick={toggleMute} title="Mute/Unmute" className="text-purple-400 hover:text-purple-300">
              {isMuted ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 9v6h4l5 5V4l-5 5H9z" strokeWidth="2" />
                  <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 9v6h4l5 5V4l-5 5H9z" strokeWidth="2" />
                  <path d="M15 9.354a4 4 0 010 5.292" strokeWidth="2" />
                </svg>
              )}
            </button>

            <button onClick={toggleFullscreen} title="Fullscreen" className="text-purple-400 hover:text-purple-300">
              {isFullscreen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" strokeWidth="2" />
                </svg>
              )}
            </button>

            <span className="text-purple-200 text-xs md:text-sm font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Progress Bar */}
          <div
            className="w-full h-1.5 bg-purple-900/30 rounded-full overflow-hidden cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-200"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
