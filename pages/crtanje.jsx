import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from '../components/Head';
import Styles from '../components/Styles';
import { Header } from '../components/Header';
import { Cestitke } from '../components/crtanje/Cestitke';
import { ModraLasta } from '../components/crtanje/ModraLasta';
import { Fusing } from '../components/crtanje/Fusing';
import { Zdravko } from '../components/crtanje/Zdravko';
import { Kraj } from '../components/Kraj';
import { Izbornik } from '../components/Izbornik';

const Home = () => (
  <>
    <Head 
        title = "Jurica Starešinčić - crteži i animacije" 
        url = "https://portfolio.kajgod.now.sh/crtanje"  
        description = "Portfelj stripova, animacija i crteža hobi-crtača i entuzijasta u crtačkim krugovima znanog kao Kajgod."
        ogImage = "https://portfolio.kajgod.now.sh/static/opengraph.png"
    />
      <ReactFullpage
        navigation="true"
        render = {({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section active">
                <Header ime="Jurica Starešinčić" titula="Entuzijast za crtanje i animaciju" slika="pozdrav2.svg"/>
              </div>
              <div className="section cestitke">
                <Cestitke />
              </div>
              <div className="section modra">
                <ModraLasta />
              </div>
              <div className="section fusing">
                <Fusing />
              </div>
              <div className="section zdravko">
                <Zdravko />
              </div>
              <div className="section">
                <Kraj />
              </div>
            </ReactFullpage.Wrapper>          
          );
        }} 
      />
    
    <Izbornik aktivna="crtanje" />
    <style jsx global>{`
      #fp-nav ul li a span {
        box-shadow: rgba(0, 0, 0, 0.1) -1px 2px 0px 0px !important;
        background: rgba(255, 255, 255, 0.5) !important;
      }
      .section {
        max-height: 100%;
      }
      #header {
        background-color: #FF8482;
      }
      .cestitke {
        background-color: #24305E;
      }
      .fusing {
        background-color: #FAABAB;
      }
      .modra {
        background-color: #A8D0E6;
      }
      }
      .zdravko {
        background-color: #24305E;
      }
    `}</style>
    <Styles />
  </>
);

export default Home;