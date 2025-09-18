import React, { lazy } from 'react';

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
      <div className="relative h-auto">
        <Devops2 />
      </div>
      <div className="relative h-auto">
        <Devops3 />
      </div>

    </div>
  );
};

export default devops;
