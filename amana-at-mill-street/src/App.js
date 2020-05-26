import React from 'react';
import './App.css';
import BootstrapCarousel from './components/BootstrapCarousel'

function App() {
  return ( 
    <div>
      <div class="top container text-center">
          <h1 class="title" id="name">Amana at Mill Street</h1>
      </div>
<BootstrapCarousel></BootstrapCarousel>
    </div>
  );
}

export default App;
