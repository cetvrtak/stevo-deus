import { useState } from 'react';
import './App.css';
import './queries.css';
import Header from './Header';
import Hero from './Hero';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
