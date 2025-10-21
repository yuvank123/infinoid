import React, { Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';
import RiseLoader from 'react-spinners/RiseLoader';


import Policy1 from '../../components/content/privacypolicy/policy1.jsx';

// Lazy load remaining sections
const ContactForm = lazy(() => import('../../components/content/career/career4.jsx'));

const apiintegrationpage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Policy1 />
      </div>

      <InView triggerOnce threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative h-auto">
            {inView && (
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <ContactForm />
              </Suspense>
            )}
          </div>
        )}
      </InView>
    </div>
  );
};

export default apiintegrationpage;
