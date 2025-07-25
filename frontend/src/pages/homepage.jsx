import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

// Home1 loads immediately (LCP-focused)
import Home1 from '../components/content/homepage/home1.jsx';

// Lazy load remaining sections
const Home2 = lazy(() => import('../components/content/homepage/home2.jsx'));
const Home3 = lazy(() => import('../components/content/homepage/home3.jsx'));
const Home4 = lazy(() => import('../components/content/homepage/home4.jsx'));
const Home5 = lazy(() => import('../components/content/homepage/home5.jsx'));
const Home6 = lazy(() => import('../components/content/homepage/home6.jsx'));

const Homepage = () => {
  return (
    <div className="bg-black text-white">
      {/* Home1 – LCP Critical */}
      <div className="relative h-auto">
        <Home1 />
      </div>

      {/* Lazy Sections – load only when in view */}
      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-[60vh] lg:h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Home2 />
              </Suspense>
            )}
          </div>
        )}
      </InView>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Home3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-screen">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Home4 />
              </Suspense>
            )}
          </div>
        )}
      </InView>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Home5 />
              </Suspense>
            )}
          </div>
        )}
      </InView>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Home6 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default Homepage;
