import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

import Eighth1 from '../../../components/content/portfolio/casestudies/casesection/f8.jsx'

const F8 = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-auto">
        <Eighth1 />
      </div>
    </div>
  );
};

export default F8;
