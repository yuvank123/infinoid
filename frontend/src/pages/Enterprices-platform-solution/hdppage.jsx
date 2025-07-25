import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import Hdp1 from '../../components/content/Enterprices & platform solution/Hrms-adminportal/hdp1.jsx';

// Lazy load remaining sections
const Hdp2 = lazy(() => import('../../components/content/Enterprices & platform solution/Hrms-adminportal/hdp2.jsx'));
const Hdp3 = lazy(() => import('../../components/content/Enterprices & platform solution/Hrms-adminportal/hdp3.jsx'));

const hdppage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Hdp1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Hdp2 />
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
                <Hdp3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default hdppage;
