import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

// About1 loads immediately (LCP-focused)
import About1 from '../components/content/about/about1.jsx';

// Lazy load remaining sections
const About2 = lazy(() => import('../components/content/about/about2.jsx'));

const Aboutus = () => {
  return (
    <div className="bg-black text-white">
      {/* About1 – LCP Critical */}
      <div className="relative h-auto">
        <About1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto lg:h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <About2 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default Aboutus;
