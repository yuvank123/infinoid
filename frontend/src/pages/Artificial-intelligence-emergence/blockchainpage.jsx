import React, { lazy } from 'react';

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
       <div className="relative h-auto">
        <Block2 />
      </div>
       <div className="relative h-auto">
        <Block3 />
      </div>

    </div>
  );
};

export default Block;
