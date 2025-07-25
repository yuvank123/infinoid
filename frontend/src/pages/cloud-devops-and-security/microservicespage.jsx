import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import Mms1 from '../../components/content/cloud-devops-security/microservices-serverless-setup/mss1';

// Lazy load remaining sections
const Mms2 = lazy(() => import('../../components/content/cloud-devops-security/microservices-serverless-setup/mss2'));
const Mms3 = lazy(() => import('../../components/content/cloud-devops-security/microservices-serverless-setup/mss3'));

const mms = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Mms1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Mms2 />
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
                <Mms3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default mms;
