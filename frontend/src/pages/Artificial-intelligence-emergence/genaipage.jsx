import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import GenAI1 from '../../components/content/AI-emerging-technologies/generative-ai/genai1';

// Lazy load remaining sections
const GenAI2 = lazy(() => import('../../components/content/AI-emerging-technologies/generative-ai/genai2'));
const GenAI3 = lazy(() => import('../../components/content/AI-emerging-technologies/generative-ai/genai3'));

const GenAI = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <GenAI1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <GenAI2 />
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
                <GenAI3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default GenAI;
