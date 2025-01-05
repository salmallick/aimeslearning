import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import Tutoring from './components/Tutoring';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background with smoother gradient */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(135%_135%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>

      {/* Content with consistent vertical rhythm */}
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="min-h-screen flex items-center py-20">
          <Home />
        </section>

        <section id="team" className="min-h-screen flex items-center py-20">
          <Team />
        </section>

        <section id="tutoring" className="min-h-screen flex items-center py-20">
          <Tutoring />
        </section>

        <section id="pricing" className="min-h-screen flex items-center py-20">
          <Pricing />
        </section>

        <section id="contact" className="min-h-[80vh] flex items-center py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;