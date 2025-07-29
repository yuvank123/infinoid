import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

// About1 loads immediately (LCP-focused)
import OC1 from '../../components/content/portfolio/ourclient/client1.jsx';

// Lazy load remaining sections
const Testinomial = lazy(() => import('../../components/elements/testinomial.jsx'));

const ourclient = () => {
  return (
    <div className="bg-black text-white">
      {/* About1 – LCP Critical */}
      <div className="relative h-auto">
        <OC1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto lg:h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Testinomial />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default ourclient;
