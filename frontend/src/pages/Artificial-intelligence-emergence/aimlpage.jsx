import React, { lazy } from 'react';

import AIML1 from '../../components/content/AI-emerging-technologies/aiml/aiml1';

// Lazy load remaining sections
const AIML2 = lazy(() => import('../../components/content/AI-emerging-technologies/aiml/aiml2'));
const AIML3 = lazy(() => import('../../components/content/AI-emerging-technologies/aiml/aiml3'));

const AIML = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <AIML1 />
      </div>
        <div className="relative h-auto">
        <AIML2 />
      </div>
        <div className="relative h-auto">
        <AIML3 />
      </div>

    </div>
  );
};

export default AIML;
