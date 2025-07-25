import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';


import First1 from '../../../components/content/portfolio/casestudies/casesection/f1.jsx'


const F1 = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-auto">
        <First1 />
      </div>
    </div>
  );
};

export default F1;
