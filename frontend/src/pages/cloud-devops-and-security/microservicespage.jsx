import React, { lazy } from 'react';

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
      <div className="relative h-auto">
        <Mms2 />
      </div>
      <div className="relative h-auto">
        <Mms3 />
      </div>

    </div>
  );
};

export default mms;
