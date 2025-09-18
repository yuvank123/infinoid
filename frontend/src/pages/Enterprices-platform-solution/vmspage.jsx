import React, { lazy } from 'react';

import VMS1 from '../../components/content/Enterprices & platform solution/VisitorMangementSystem/vms1.jsx';

// Lazy load remaining sections
const VMS2 = lazy(() => import('../../components/content/Enterprices & platform solution/VisitorMangementSystem/vms2.jsx'));
const VMS3 = lazy(() => import('../../components/content/Enterprices & platform solution/VisitorMangementSystem/vms3.jsx'));

const vmspage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <VMS1 />
      </div>
      <div className="relative h-auto">
        <VMS2 />
      </div>
      <div className="relative h-auto">
        <VMS3 />
      </div>

    </div>
  );
};

export default vmspage;
