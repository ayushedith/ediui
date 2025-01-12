import React from 'react';
import { Navbar } from './components/ui/navbar';
import { Hero } from './components/ui/hero';
import { Features } from './components/ui/features';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
// Path: src/components/ui/navbar.tsx