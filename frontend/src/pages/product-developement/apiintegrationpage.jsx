import React, {lazy } from 'react';

import API1 from '../../components/content/development/apiintegration/api1';

// Lazy load remaining sections
const API2 = lazy(() => import('../../components/content/development/apiintegration/api2'));
const API3 = lazy(() => import('../../components/content/development/apiintegration/api3'));

const apiintegrationpage = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-auto">
        <API1 />
      </div>
       <div className="relative h-auto">
        <API2 />
      </div>
       <div className="relative h-auto">
        <API3 />
      </div>
    </div>
  );
};

export default apiintegrationpage;
