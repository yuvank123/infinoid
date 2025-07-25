import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

// About1 loads immediately (LCP-focused)
import CaseStudies from '../../components/content/portfolio/casestudies/casestudy';

const caseStudies = () => {
  return (
    <div className="bg-black text-white">
      {/* About1 – LCP Critical */}
      <div className="relative h-auto">
        <CaseStudies />
      </div>
    </div>
  );
};

export default caseStudies;
