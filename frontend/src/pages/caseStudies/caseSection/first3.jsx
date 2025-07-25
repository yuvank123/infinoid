import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

import Third1 from '../../../components/content/portfolio/casestudies/casesection/f3.jsx'

const F3 = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-auto">
        <Third1 />
      </div>
    </div>
  );
};

export default F3;
