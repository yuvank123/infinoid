import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RiseLoader from 'react-spinners/RiseLoader';

import Navbar from './components/elements/navbar.jsx';
import Footers from './components/elements/footer.jsx';
import Whats from './../public/images/whatsapp.webp';
import ScrollToTop from './ScrollToTop.jsx';

const List = [
  {
    path: '/',
    component: lazy(() => import('./pages/homepage.jsx')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/aboutus.jsx')),
  },
  {
    path: '/career',
    component: lazy(() => import('./pages/careerpage.jsx')),
  },
  {
    path: '/contact',
    component: lazy(() => import('./pages/contact.jsx')),
  },
  {
    path: '/services/webmobile-dev',
    component: lazy(() => import('./pages/product-developement/wmdevpage.jsx')),
  },
  {
    path: '/services/uiux',
    component: lazy(() => import('./pages/product-developement/uiuxpage.jsx')),
  },
  {
    path: '/services/csd',
    component: lazy(() => import('./pages/product-developement/softwaredevpage.jsx')),
  },
  {
    path: '/services/api-integration',
    component: lazy(() => import('./pages/product-developement/apiintegrationpage.jsx')),
  },
  {
    path: '/services/crm-erp',
    component: lazy(() => import('./pages/Enterprices-platform-solution/crmerppage.jsx')),
  },
  {
    path: '/services/vms',
    component: lazy(() => import('./pages/Enterprices-platform-solution/vmspage.jsx')),
  },
  {
    path: '/services/Hrms-adminportals',
    component: lazy(() => import('./pages/Enterprices-platform-solution/hdppage.jsx')),
  },
  {
    path: '/services/wla',
    component: lazy(() => import('./pages/Enterprices-platform-solution/wlapage.jsx')),
  },
  {
    path: '/services/devops',
    component: lazy(() => import('./pages/cloud-devops-and-security/devops.jsx')),
  },
  {
    path: '/services/cloud',
    component: lazy(() => import('./pages/cloud-devops-and-security/clouds.jsx')),
  },
  {
    path: '/services/cybersecurity',
    component: lazy(() => import('./pages/cloud-devops-and-security/cybercompliancepage.jsx')),
  },
  {
    path: '/services/Microservices',
    component: lazy(() => import('./pages/cloud-devops-and-security/microservicespage.jsx')),
  },
  {
    path: '/services/aiml',
    component: lazy(() => import('./pages/Artificial-intelligence-emergence/aimlpage.jsx')),
  },
  {
    path: '/services/GenAI-Chatbot',
    component: lazy(() => import('./pages/Artificial-intelligence-emergence/genaipage.jsx')),
  },
  {
    path: '/services/blockchain',
    component: lazy(() => import('./pages/Artificial-intelligence-emergence/blockchainpage.jsx')),
  },
  {
    path: '/services/ARVR',
    component: lazy(() => import('./pages/Artificial-intelligence-emergence/arvrand3dmodellingpage.jsx')),
  },
  {
    path: '/services/iot',
    component: lazy(() => import('./pages/Artificial-intelligence-emergence/iotandsmartsyspage.jsx')),
  },
  {
    path: '/case-studies',
    component: lazy(() => import('./pages/caseStudies/caseStudies.jsx')),
  },
  {
    path: '/case-studies/portfolio1',
    component: lazy(() => import('./pages/caseStudies/caseSection/first1.jsx')),
  },
  {
    path: '/case-studies/portfolio2',
    component: lazy(() => import('./pages/caseStudies/caseSection/first3.jsx')),
  },
  {
    path: '/case-studies/portfolio3',
    component: lazy(() => import('./pages/caseStudies/caseSection/first2.jsx')),
  },
  {
    path: '/case-studies/portfolio4',
    component: lazy(() => import('./pages/caseStudies/caseSection/first4.jsx')),
  },
  {
    path: '/case-studies/portfolio5',
    component: lazy(() => import('./pages/caseStudies/caseSection/first5.jsx')),
  },
  {
    path: '/case-studies/portfolio6',
    component: lazy(() => import('./pages/caseStudies/caseSection/first6.jsx')),
  },
  {
    path: '/case-studies/portfolio7',
    component: lazy(() => import('./pages/caseStudies/caseSection/first7.jsx')),
  },
  {
    path: '/case-studies/portfolio8',
    component: lazy(() => import('./pages/caseStudies/caseSection/first8.jsx')),
  },
  {
    path: '/case-studies/portfolio9',
    component: lazy(() => import('./pages/caseStudies/caseSection/first9.jsx')),
  },
  {
    path: '/case-studies/portfolio10',
    component: lazy(() => import('./pages/caseStudies/caseSection/first10.jsx')),
  },
  {
    path: '/clients',
    component: lazy(() => import('./pages/ourclient/ourclientpage.jsx')),
  },
  {
    path: '/policy',
    component: lazy(() => import('./pages/privacy/privacypolicypage.jsx')),
  }
];



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow bg-black">
        <Suspense fallback={<div className="text-center"><RiseLoader color="#5c00a5" /></div>}>
          <ScrollToTop />
          <Routes>
            {List.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Routes>

          <Footers />

        </Suspense>
      </div>
      <a
        href="https://wa.link/5606l7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-8 right-8 z-20 rounded-full transition-transform hover:scale-105"
      >
        {/* Wrapper keeps size stable across breakpoints */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={Whats}
            alt="WhatsApp icon - Chat with us"
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
            width="64"
            height="64"
            loading="lazy"
          />
        </div>
      </a>
    </div>
  );
};

export default App;
