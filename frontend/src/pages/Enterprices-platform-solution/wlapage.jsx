import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import Wla1 from '../../components/content/Enterprices & platform solution/workflow-and-logisticAutomation/wla1.jsx';

// Lazy load remaining sections
const Wla2 = lazy(() => import('../../components/content/Enterprices & platform solution/workflow-and-logisticAutomation/wla2.jsx'));
const Wla3 = lazy(() => import('../../components/content/Enterprices & platform solution/workflow-and-logisticAutomation/wla3.jsx'));

const wlapage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Wla1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Wla2 />
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
                <Wla3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default wlapage;
