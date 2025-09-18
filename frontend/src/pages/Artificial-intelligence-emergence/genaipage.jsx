import React, { lazy } from 'react';


import GenAI1 from '../../components/content/AI-emerging-technologies/generative-ai/genai1';

// Lazy load remaining sections
const GenAI2 = lazy(() => import('../../components/content/AI-emerging-technologies/generative-ai/genai2'));
const GenAI3 = lazy(() => import('../../components/content/AI-emerging-technologies/generative-ai/genai3'));

const GenAI = () => {
  return (
    <div className="bg-black text-white">

      <div className="relative h-auto">
        <GenAI1 />
      </div>
      <div className="relative h-auto">
        <GenAI2 />
      </div>
      <div className="relative h-auto">
        <GenAI3 />
      </div>

    </div>
  );
};

export default GenAI;
