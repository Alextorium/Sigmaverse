import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import BuyBeta from './components/BuyBeta'
import WhatisSigma from './components/WhatIsSigma';
import Telegram from './components/Telegram'
import UseCases from './components/UseCases';
import OurTeam from './components/OurTeam';
import InterFi from './components/InterFi';
import Faqs from './components/Faqs';
import Tokenomics from './components/Tokenomics';
import Graph from './components/Graph';
import BuySigmaD from './components/BuySigmaDesktop';
import WhatIsSigmaDesktop from './components/WhatIsSigmaDesktop';
import './components/BuyBeta/BuyBeta.css'
import OurTeamDesktop from './components/OurTeamDesktop';
import RoadMapDesktop from './components/RoadMapDesktop'
import UseCasesDesktop from './components/UseCasesDesktop';
import RoadMap from './components/RoadMap';
import NFTsDesktop from './components/NFTsDesktop';
import NFTs from './components/NFTs';
import Wlove from './components/WLove';
import WLoveM from './components/WloveM';
import TokenN from './components/TheRealTokenomics';
import TheRealTokenomicsMobile from './components/TheRealTokenomicsMobile';



function App() {



  return (

    <div style={{ width:'100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="App">
      {/* Componente Navbar dentro de BuyBeta para dar coherencia a el dise~o */}
      <BuyBeta />
      <BuySigmaD />
      <br />
      <WhatIsSigmaDesktop/>
      <WhatisSigma />
      <br />
      <Wlove/>
      <WLoveM/>
      <br />
      {/* <NFTsDesktop />
      <NFTs/> */}
      <br />
      <Tokenomics  />
      <Graph />
      <br />
      <TokenN />
      <TheRealTokenomicsMobile  />
      <br />
      <UseCasesDesktop />
      <UseCases  />
      <br />
      <OurTeamDesktop  />
      <OurTeam />
      <br />
      <RoadMapDesktop  />
      <RoadMap /> 
      <br />
      <Faqs  />
      <br />
      <InterFi />
      <br />
      <Telegram />
      <br /> 
      <p style={{color: 'white', fontSize: '11px'}}>All rights reserved</p>
      <br />
    </div>
  );
}

export default App;
