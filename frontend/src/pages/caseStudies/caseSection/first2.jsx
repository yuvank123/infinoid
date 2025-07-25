import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

import Second1 from '../../../components/content/portfolio/casestudies/casesection/f2.jsx'

const F2 = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-auto">
        <Second1 />
      </div>
    </div>
  );
};

export default F2;
