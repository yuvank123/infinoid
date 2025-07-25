import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import Devops1 from '../../components/content/cloud-devops-security/devops/devops1';

// Lazy load remaining sections
const Devops2 = lazy(() => import('../../components/content/cloud-devops-security/devops/devops2'));
const Devops3 = lazy(() => import('../../components/content/cloud-devops-security/devops/devops3'));

const devops = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Devops1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Devops2 />
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
                <Devops3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default devops;
