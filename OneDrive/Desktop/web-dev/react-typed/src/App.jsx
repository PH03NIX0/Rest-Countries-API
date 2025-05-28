import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Analytics from './components/analytics.jsx';
import Newsletter from './components/newsletter.jsx';
import Cards from './components/cards.jsx';
import Footer from './components/footer.jsx';

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;