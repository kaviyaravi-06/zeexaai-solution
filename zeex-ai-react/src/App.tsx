import React from 'react';
import SolutionsGrid from './components/SolutionsGrid';
import Industries from './components/Industries';
import TechDeepDive from './components/TechDeepDive';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import './solution.css';

const App: React.FC = () => {
  return (
    <div className="App"> 
      <SolutionsGrid />
      <Industries />
      <TechDeepDive />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default App;