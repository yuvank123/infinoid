import React, { lazy } from 'react';

import Cc1 from '../../components/content/cloud-devops-security/cybersecurity&compliance/cc1';

// Lazy load remaining sections
const Cc2 = lazy(() => import('../../components/content/cloud-devops-security/cybersecurity&compliance/cc2'));
const Cc3 = lazy(() => import('../../components/content/cloud-devops-security/cybersecurity&compliance/cc3'));

const cc = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Cc1 />
      </div>
      <div className="relative h-auto">
        <Cc2 />
      </div>
      <div className="relative h-auto">
        <Cc3 />
      </div>

    </div>
  );
};

export default cc;
