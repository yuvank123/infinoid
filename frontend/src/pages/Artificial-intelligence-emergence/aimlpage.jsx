import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import AIML1 from '../../components/content/AI-emerging-technologies/aiml/aiml1';

// Lazy load remaining sections
const AIML2 = lazy(() => import('../../components/content/AI-emerging-technologies/aiml/aiml2'));
const AIML3 = lazy(() => import('../../components/content/AI-emerging-technologies/aiml/aiml3'));

const AIML = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <AIML1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <AIML2 />
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
                <AIML3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default AIML;
