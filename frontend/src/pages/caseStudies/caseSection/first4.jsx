import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

import Fourth1 from '../../../components/content/portfolio/casestudies/casesection/f4.jsx'

const F4 = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-auto">
        <Fourth1 />
      </div>
    </div>
  );
};

export default F4;
