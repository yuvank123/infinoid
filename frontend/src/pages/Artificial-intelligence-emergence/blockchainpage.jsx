import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import Block1 from '../../components/content/AI-emerging-technologies/blockchain/block1';

// Lazy load remaining sections
const Block2 = lazy(() => import('../../components/content/AI-emerging-technologies/blockchain/block2'));
const Block3 = lazy(() => import('../../components/content/AI-emerging-technologies/blockchain/block3'));

const Block = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Block1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Block2 />
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
                <Block3 />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default Block;
