import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

import Fivth1 from '../../../components/content/portfolio/casestudies/casesection/f5.jsx'

const F5 = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-auto">
        <Fivth1 />
      </div>
    </div>
  );
};

export default F5;
