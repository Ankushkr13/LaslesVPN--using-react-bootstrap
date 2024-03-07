import React from 'react';
import Header from './components/header.js'
import About from './components/about.js';
import Features from './components/features.js';
import Help from './components/help.js';
import Pricing from './components/pricing.js'
import Location from './components/location.js'
import Testimonials from './components/testimonials.js';
import Footer from './components/footer.js';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Pricing />
      <Location />
      <Testimonials />
      <Help />
      <Footer />
    </>
  )
}

export default App;