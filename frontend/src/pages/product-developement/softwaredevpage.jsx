import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import CSD1 from '../../components/content/development/softwaredev/softdev1';

// Lazy load remaining sections
const CSD2 = lazy(() => import('../../components/content/development/softwaredev/softdev2'));
const CSD3 = lazy(() => import('../../components/content/development/softwaredev/softdev3'));
const CSD4 = lazy(() => import('../../components/content/development/softwaredev/softdev4'));

const softwaredevpage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <CSD1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <CSD2 />
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
                <CSD3 />
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
                <CSD4 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default softwaredevpage;
