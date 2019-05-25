import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from '../components/Head';
import Styles from '../components/Styles';
import { Header } from '../components/Header';
import { Interactive } from '../components/index/Interactive';
import { Izazov } from '../components/index/Izazov';
import { Incase } from '../components/index/Incase';
import { Ostalo } from '../components/index/Ostalo';
import { Kraj } from '../components/Kraj';
import { Izbornik } from '../components/Izbornik';

const Home = () => (
  <>
    <Head 
      title="Jurica Starešinčić - senior developer" 
      url="https://portfolio.kajgod.now.sh/" 
      description="Portfelj nekih od projekata na kojima je gorenavedeni radio u svojih 15 godina iskustva"
      ogImage = "https://portfolio.kajgod.now.sh/static/opengraph.png"
    />
      <ReactFullpage
        navigation="true"
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section active">
                <Header ime="Jurica Starešinčić" titula="Senior JavaScript developer" slika="pozdrav.svg" />
              </div>
              <div className="section development">
                <Interactive />
              </div>
              <div className="section izazov">
                <Izazov />
              </div>
              <div className="section incase">
                <Incase />
              </div>
              <div className="section ostalo">
                <Ostalo />
              </div>
              <div className="section">
                <Kraj />
              </div>
            </ReactFullpage.Wrapper>          
          );
        }} 
      />
    
    <Izbornik aktivna="index" />
    <style jsx global>{`
      #fp-nav ul li a span {
        box-shadow: rgba(0, 0, 0, 0.1) -1px 2px 0px 0px !important;
        background: rgba(255, 255, 255, 0.5) !important;
      }
      .section {
        max-height: 100%;
      }
      #header {
        background-color: #A8D0E6;
      }
      .development {
        background-color: #F76C6C;
      }
      .izazov {
        background-color: #24305E;
      }
      .incase {
        background-color: #FAABAB;
      }
      .ostalo {
        background-color: #A8D0E6;
      }
    `}</style>
    <Styles />
  </>
);
export default Home;