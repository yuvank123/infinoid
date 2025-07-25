import React from 'react';
import ScrollVelocity from '../../elements/elementhome5.jsx';
import { Helmet } from 'react-helmet';

const home5 = () => {
  return (
    <div className='border-t-0 border-gray-800 pt-1 pb-0 text-gray-300 relative'>
      {/* SEO Helmet */}
      <Helmet>
        <title>Smart Traffic Routing | AI-Powered Optimization</title>
        <meta name="description" content="Explore intelligent traffic routing and neural path optimization using AI-powered network mapping techniques." />
        <meta name="keywords" content="Smart Traffic, AI Network, Neural Routing, Intelligent Optimization, Network Mapping" />
      </Helmet>

      <div className="absolute top-0 left-0 w-full h-[0.5px] z-50 shiny-border opacity-50" />

      <div className='mt-[10%] p-2 mb-[10%]'>
        <ScrollVelocity
          texts={[
            '😃Smart-Traffic-Routing   🤔Intelligent-Path-Optimization   😊AI-Powered-Network-Mapping',
            '😎Smart-Traffic-Routing   🧠Neural-Path-Optimization   😁AI-Powered-Network-Mapping'
          ]}
          velocity={100}
          className="custom-scroll-text unbounded mt-2 py-2"
        />
      </div>
    </div>
  );
};

export default home5;
