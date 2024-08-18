import { useState } from 'react';
import './App.css';
import './queries.css';
import Header from './Header';
import Hero from './Hero';
import Automatization from './Automatization';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Automatization />
      </main>
    </>
  );
}

export default App;
