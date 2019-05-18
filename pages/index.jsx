import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from '../components/Head';
import Nav from '../components/Nav';
import Styles from '../components/Styles';
import { Header } from '../components/Header';
import { Interactive } from '../components/Interactive';
import { Izazov } from '../components/Izazov';

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
              <div className="section">
                <Nav />
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
    `}</style>
    <Styles />
  </>
);

export default Home;