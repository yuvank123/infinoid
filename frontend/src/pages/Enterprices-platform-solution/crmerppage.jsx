import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import CRMERP1 from '../../components/content/Enterprices & platform solution/CRM_and_ERP/crmanderp1';

// Lazy load remaining sections
const CRMERP2 = lazy(() => import('../../components/content/Enterprices & platform solution/CRM_and_ERP/crmanderp2'));
const CRMERP3 = lazy(() => import('../../components/content/Enterprices & platform solution/CRM_and_ERP/crmanderp3'));

const crmerppage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <CRMERP1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <CRMERP2 />
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
                <CRMERP3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default crmerppage;
