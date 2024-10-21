import React from 'react';
import './App.css';
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="imagemPrincipal">
      </div>
      <Header />
      <Carrossel />
      <main className="Main">
        <Section 
          titulo="Opa"
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
