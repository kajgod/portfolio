import React from 'react';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';
import ImageGallery from 'react-image-gallery';
import Head from '../components/Head';
import Nav from '../components/Nav';
import Styles from '../components/Styles';
import GalleryStyles from '../components/GalleryStyles';
import { Header } from '../components/Header';

const Home = () => (
  <>
    <Head title="Home" />
      <ReactFullpage
        navigation="true"
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Header />
              </div>
              <div className="section development">
                <Development />
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
      .development {
        background-color: #F76C6C;
      }
    `}</style>
    <Styles />
  </>
);

const Development = () => {
  const images = [
    {
      original: 'http://najam-tableta.com/images/interactive.jpg',
      thumbnail: 'http://najam-tableta.com/images/interactive.jpg',
    },
    {
      original: 'http://najam-tableta.com/images/interactive1.jpg',
      thumbnail: 'http://najam-tableta.com/images/interactive1.jpg',
    },
    {
      original: 'http://najam-tableta.com/images/interactive2.jpg',
      thumbnail: 'http://najam-tableta.com/images/interactive2.jpg',
    },
    {
      original: 'http://najam-tableta.com/images/interactive3.jpg',
      thumbnail: 'http://najam-tableta.com/images/interactive3.jpg',
    }
  ];
  return (
    <>
      <section className="spotlight">
        <ImageGallery showThumbnails={false} items={images} showPlayButton={false} />
        <div className="content">
          <h3>INteractive aplikacija za tablete</h3>
          <p>Razvio sam kompletnu arhitekturu sustava, baza podataka (MySQL i MongoDB) i napisao veliku većinu koda za sva tri sustava:</p>
          <ul>
            <li>Node.js (Express + Socket.io) server </li>
            <li>Custom framework za backend sa sustavom single-page-component modula</li>
            <li>Cordova/PhoneGap aplikacija za Android mobitele</li>
          </ul>
          <Link href="http://www.najam-tableta.com/">
            <a className="button" target="_blank">
              Više o aplikaciji
            </a>
          </Link>
        </div>
      </section>
      <GalleryStyles />
      <style jsx>{`
      .content {
        margin-left:5%;
        padding: 20px;
      }
      .spotlight {
        background-color: #fff;
      }
      .image-gallery {
        max-width:50%;
      }
      .button {
        box-shadow: inset 0 0 0 2px #e6e6e6;
      }
    `}</style>
    </>
  )
};

export default Home;