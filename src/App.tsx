import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Who } from './components/Who';
import { Template } from './components/mainComponents';
import { OnlineService } from './components/OnlineService';
import { Consultancy } from './components/Consultancy';
import { Footer } from './Footer';

function App() {
  return (
    <Template>
      <Header />
      <Who />
      <OnlineService />
      <Consultancy />
      <Footer />
    </Template>
    
    
  );
}

export default App;
