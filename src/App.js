import React from 'react';
import Home from './components/home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Links from './components/Links/Links';
import Contact from './components/Contact/Conatct';
import Footer from './components/Footer/Footer';
function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Links/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;