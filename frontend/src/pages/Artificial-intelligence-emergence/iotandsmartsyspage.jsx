import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import IoT1 from '../../components/content/AI-emerging-technologies/IOTandSmartSys/iot1';

// Lazy load remaining sections
const IoT2 = lazy(() => import('../../components/content/AI-emerging-technologies/IOTandSmartSys/iot2'));
const IoT3 = lazy(() => import('../../components/content/AI-emerging-technologies/IOTandSmartSys/iot3'));

const IoT = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <IoT1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <IoT2 />
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
                <IoT3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default IoT;
