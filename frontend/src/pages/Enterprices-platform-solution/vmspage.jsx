import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import VMS1 from '../../components/content/Enterprices & platform solution/VisitorMangementSystem/vms1.jsx';

// Lazy load remaining sections
const VMS2 = lazy(() => import('../../components/content/Enterprices & platform solution/VisitorMangementSystem/vms2.jsx'));
const VMS3 = lazy(() => import('../../components/content/Enterprices & platform solution/VisitorMangementSystem/vms3.jsx'));

const vmspage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <VMS1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <VMS2 />
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
                <VMS3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default vmspage;
