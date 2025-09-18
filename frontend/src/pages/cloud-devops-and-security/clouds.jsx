import React, { lazy } from 'react';


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
      <div className="relative h-auto">
        <Cloud2 />
      </div>
      <div className="relative h-auto">
        <Cloud3 />
      </div>

    </div>
  );
};

export default clouds;
