import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import ARVR1 from '../../components/content/AI-emerging-technologies/arvr-and-3Dmodelling/arvr1';

// Lazy load remaining sections
const ARVR2 = lazy(() => import('../../components/content/AI-emerging-technologies/arvr-and-3Dmodelling/arvr2'));
const ARVR3 = lazy(() => import('../../components/content/AI-emerging-technologies/arvr-and-3Dmodelling/arvr3'));

const arvr = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <ARVR1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                < ARVR2 />
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
                < ARVR3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default arvr;
