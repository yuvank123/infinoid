import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import UIUX1 from '../../components/content/development/uiux/uiux1.jsx';

// Lazy load remaining sections
const UIUX2 = lazy(() => import('../../components/content/development/uiux/uiux2.jsx'));
const UIUX3 = lazy(() => import('../../components/content/development/uiux/uiux3.jsx'));
const UIUX4 = lazy(() => import('../../components/content/development/uiux/uiux4.jsx'));

const uiuxpage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <UIUX1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <UIUX2 />
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
                <UIUX3 />
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
                <UIUX4 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default uiuxpage;
