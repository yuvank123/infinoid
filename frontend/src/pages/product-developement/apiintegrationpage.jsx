import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import API1 from '../../components/content/development/apiintegration/api1';

// Lazy load remaining sections
const API2 = lazy(() => import('../../components/content/development/apiintegration/api2'));
const API3 = lazy(() => import('../../components/content/development/apiintegration/api3'));

const apiintegrationpage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <API1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <API2 />
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
                <API3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default apiintegrationpage;
