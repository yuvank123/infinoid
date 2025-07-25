import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import Cloud1 from '../../components/content/cloud-devops-security/clouds/cloud1';

// Lazy load remaining sections
const Cloud2 = lazy(() => import('../../components/content/cloud-devops-security/clouds/cloud2'));
const Cloud3 = lazy(() => import('../../components/content/cloud-devops-security/clouds/cloud3'));

const clouds = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Cloud1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Cloud2 />
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
                <Cloud3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default clouds;
