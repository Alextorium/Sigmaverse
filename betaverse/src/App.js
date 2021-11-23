import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './components/Counter'
import BuyBeta from './components/BuyBeta'
import WhatisBeta from './components/WhatIsBeta';
function App() {
  return (
    <div style={{backgroundColor: "lightblue", display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="App">
      
      <BuyBeta />
      <Counter />
      <WhatisBeta />
    </div>
  );
}

export default App;
