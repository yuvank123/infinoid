import React, { useRef, useState, useEffect, Suspense } from 'react';

const VideoPlayer = React.lazy(() => import('../../elements/videoPlayer.jsx'));

const Home2 = () => {
  const containerRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b via-black to-black flex items-center justify-center px-4 py-10 perspective-[1200px]"
    >
      <div
        className={`
          relative w-full max-w-5xl rounded-2xl shadow-gray-900 shadow-2xl overflow-hidden border border-gray-700 
          bg-gray-800/80 backdrop-blur-md -top-65 lg:top-0 transition-all duration-700 ease-out
          transform-gpu
          ${showVideo ? 'rotate-x-5 translate-y-0 scale-90' : 'rotate-x-52 translate-y-12 scale-65'}
        `}
      >
        {/* macOS window header */}
        <div className="flex items-center gap-3 p-3 bg-gray-900">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Video Container with full-fit */}
        <div className="w-full aspect-video relative">
          {showVideo ? (
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  Loading video...
                </div>
              }
            >
              <div className="absolute inset-0">
                <VideoPlayer />
              </div>
            </Suspense>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white italic opacity-50">
              Scroll to load video...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home2;
