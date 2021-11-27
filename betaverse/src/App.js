import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import BuyBeta from './components/BuyBeta'
import WhatisBeta from './components/WhatIsBeta';
import TokenDistribution from './components/TokenDist'



function App() {
  return (
    <div style={{ width:'100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="App">
      {/* Componente Navbar dentro de BuyBeta para dar coherencia a el dise~o */}
      <BuyBeta />
      <br />
      <WhatisBeta />
      <br />
      <TokenDistribution />
      <br />
    </div>
  );
}

export default App;
