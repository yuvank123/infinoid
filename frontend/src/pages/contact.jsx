import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

// contact1 loads immediately (LCP-focused)
import Contact1 from '../components/content/contact/contact1.jsx';

// Lazy load remaining sections
const Career4 = lazy(() => import('../components/content/career/career4.jsx'));

const contactpage = () => {
  return (
    <div className="bg-black text-white">
      {/* contact1 – LCP Critical */}
      <div className="relative h-auto">
        <Contact1 />
      </div>

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

export default contactpage;
