import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import WMdev1 from '../../components/content/development/WMdev/wmdev1.jsx';

// Lazy load remaining sections
const WMdev2 = lazy(() => import('../../components/content/development/WMdev/wmdev2.jsx'));
const WMdev3 = lazy(() => import('../../components/content/development/WMdev/wmdev3.jsx'));
const WMdev4 = lazy(() => import('../../components/content/development/WMdev/wmdev4.jsx'));

const wmdevpage = () => {
  return (
    <div className="bg-black text-white">
      
      <div className="relative h-auto">
        <WMdev1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <WMdev2 />
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
                <WMdev3 />
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
                <WMdev4 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default wmdevpage;
