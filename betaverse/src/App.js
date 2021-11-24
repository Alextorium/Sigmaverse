import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './components/Counter'
import BuyBeta from './components/BuyBeta'
import WhatisBeta from './components/WhatIsBeta';
import TokenDistribution from './components/TokenDist'

function App() {
  return (
    <div style={{backgroundColor: "lightblue", display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="App">
      {/* Componente Navbar dentro de BuyBeta para dar coherencia a el dise~o */}
      <BuyBeta />
      <br />
      <Counter />
      <br />
      <WhatisBeta />
      <br />
      <TokenDistribution />
      <br />
    </div>
  );
}

export default App;
