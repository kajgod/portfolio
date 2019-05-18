import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from '../components/Head';
import Styles from '../components/Styles';
import { Header } from '../components/Header';
import { Interactive } from '../components/Interactive';
import { Izazov } from '../components/Izazov';
import { Incase } from '../components/Incase';
import { Ostalo } from '../components/Ostalo';
import { Kraj } from '../components/Kraj';

const Home = () => (
  <>
    <Head title="Home" />
      <ReactFullpage
        navigation="true"
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section active">
                <Header />
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
    <style jsx global>{`
      #fp-nav ul li a span {
        box-shadow: rgba(0, 0, 0, 0.1) -1px 2px 0px 0px !important;
        background: rgba(255, 255, 255, 0.5) !important;
      }
      .section {
        max-height: 100%;
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