import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

// career1 loads immediately (LCP-focused)
import Career1 from '../components/content/career/career1.jsx';

// Lazy load remaining sections
const Career2 = lazy(() => import('../components/content/career/career2.jsx'));
const Career3 = lazy(() => import('../components/content/career/career3.jsx'));
const Career4 = lazy(() => import('../components/content/career/career4.jsx'));

const careerpage = () => {
  return (
    <div className="bg-black text-white">
      {/* Career1 – LCP Critical */}
      <div className="relative h-screen">
        <Career1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto lg:h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Career2 />
              </Suspense>
            )}
          </div>
        )}
      </InView>

       <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto lg:h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Career3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto lg:h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Career4 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default careerpage;
