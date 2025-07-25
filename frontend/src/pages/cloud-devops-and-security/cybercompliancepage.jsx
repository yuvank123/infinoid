import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import Cc1 from '../../components/content/cloud-devops-security/cybersecurity&compliance/cc1';

// Lazy load remaining sections
const Cc2 = lazy(() => import('../../components/content/cloud-devops-security/cybersecurity&compliance/cc2'));
const Cc3 = lazy(() => import('../../components/content/cloud-devops-security/cybersecurity&compliance/cc3'));

const cc = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Cc1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Cc2 />
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
                <Cc3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default cc;
