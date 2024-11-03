import React from 'react';
import { Hero } from './components/Hero';
import { Founders } from './components/Founders';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-black">
      <Hero />
      <Founders />
      <Contact />
    </main>
  );
}

export default App;